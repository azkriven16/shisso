"use client";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { cn, getTitle } from "@/lib/utils";
import Link from "next/link";
import { PlayCircle, SlidersHorizontal } from "lucide-react";
import { IAnimeEpisode, IAnimeResult } from "@/types";
import Pagination from "../pagination";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import NoItems from "../no-items";
interface GridProps {
  loading: boolean;
  pagination?: string;
  hasEpisodes?: boolean;
  text: string;
  desc?: string;
  data: IAnimeResult | undefined;
}

const episodesPerPage = 10; // Adjust the number of episodes to load initially
const initialVisibleEpisodes = episodesPerPage;

export default function Grid({
  loading,
  text,
  data,
  pagination,
  hasEpisodes,
  desc,
}: GridProps) {
  const skeletonArray = new Array(10).fill(null);
  const [visibleEpisodes, setVisibleEpisodes] = useState(
    initialVisibleEpisodes
  );
  const [isDescendingOrder, setIsDescendingOrder] = useState(false); // Default to ascending order

  const totalEpisodes = data?.episodes?.length;

  const handleShowMore = () => {
    const newVisibleEpisodes = visibleEpisodes + episodesPerPage;
    setVisibleEpisodes(Math.min(newVisibleEpisodes, totalEpisodes));
  };
  // Sort episodes based on the selected order (ascending or descending)
  const sortedEpisodes = isDescendingOrder
    ? [...data?.episodes].reverse()
    : data?.episodes;
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{text}</h1>
          <p className="text-muted-foreground text-base md:text-lg">{desc}</p>
        </div>
        {pagination && (
          <div className="hidden md:flex">
            <Pagination url={pagination} />
          </div>
        )}
      </div>
      {pagination && (
        <div className="md:hidden flex">
          <Pagination url={pagination} />
        </div>
      )}
      {hasEpisodes && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="mt-6">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {isDescendingOrder ? "Latest" : "Oldest"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => setIsDescendingOrder(true)}
              className={cn(
                "rounded-none",
                isDescendingOrder && "bg-secondary text-secondary-foreground"
              )}
            >
              Latest
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setIsDescendingOrder(false)}
              className={cn(
                "rounded-none",
                !isDescendingOrder && "bg-secondary text-secondary-foreground"
              )}
            >
              Oldest
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      <div
        className={cn(
          "h-full w-full grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        )}
      >
        {loading
          ? skeletonArray.map((_, index) => (
              <Skeleton key={index} className="w-full aspect-video rounded" />
            ))
          : hasEpisodes
          ? sortedEpisodes
              ?.slice(0, visibleEpisodes)
              ?.map((anime: IAnimeEpisode) => (
                <EpisodeCard key={anime.id} anime={anime} info={data} />
              ))
          : data?.results?.map((anime: IAnimeResult) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
      </div>

      {data?.results?.length === 0 && <NoItems />}

      {visibleEpisodes < totalEpisodes && (
        <Button
          className="show-more-button mt-5 w-full"
          size="sm"
          onClick={handleShowMore}
        >
          Show More Episodes
        </Button>
      )}
      {pagination && <Pagination url={pagination} />}
    </>
  );
}

function AnimeCard({ anime }: { anime: IAnimeResult }) {
  return (
    <Link href={`/info?anime=${anime.id}`} className="group">
      <div className="aspect-video rounded relative cursor-pointer">
        <Image src={anime.image!} alt="box" fill className="object-cover" />
        <div className="inset-0 opacity-0 group-hover:opacity-100 bg-black/70 z-10 absolute p-2 flex items-center justify-center">
          <PlayCircle className="h-8 w-8 text-white" />
        </div>
      </div>
      <h3 className="line-clamp-1 mt-2">{getTitle({ text: anime.title })}</h3>
    </Link>
  );
}

function EpisodeCard({
  anime,
  info,
}: {
  anime: IAnimeEpisode | undefined;
  info: IAnimeResult | undefined;
}) {
  return (
    <Link
      href={`/video?anime=${info?.id}&episode=${anime?.id}`}
      className="group"
    >
      <div className="aspect-video rounded relative cursor-pointer">
        <Image
          src={anime?.image! || info?.image!}
          alt="box"
          fill
          className={cn("object-cover", !anime?.image && "bg-foreground")}
        />
        <div className="inset-0 opacity-0 group-hover:opacity-100 bg-black/70 z-10 absolute p-2 flex items-center justify-center">
          <PlayCircle className="h-10 w-10 text-white" />
        </div>
      </div>
      <h3 className="line-clamp-1 mt-2">Episode {anime?.number}</h3>
    </Link>
  );
}
