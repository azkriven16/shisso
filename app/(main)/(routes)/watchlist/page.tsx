"use client";
import { trpc } from "@/app/_trpc/client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { getTitle } from "@/lib/utils";
import { MoreVertical, PlayCircle, Search, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Favorite } from "@prisma/client";

export default function Watchlist() {
  const { data, isLoading } = trpc.getUserWatchlist.useQuery();
  const skeletonArray = new Array(10).fill(null);

  return (
    <MaxWidthWrapper className="my-5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">
            Watchlist - <span>{data?.length || "0"}</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Explore your personalized anime watchlist
          </p>
        </div>

        <div className="flex items-center">
          <Search /> <Input placeholder="Search..." />
        </div>
      </div>
      <div className="h-full w-full grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5">
        {isLoading
          ? skeletonArray.map((_, index) => (
              <Skeleton key={index} className="w-full aspect-video rounded" />
            ))
          : data?.map((anime) => (
              <AnimeCard
                anime={{
                  ...anime,
                  createdAt: new Date(anime.createdAt),
                  updatedAt: new Date(anime.updatedAt),
                }}
              />
            ))}
      </div>
      {data?.length === 0 && (
        <div className="flex items-center justify-center flex-col">
          <Image
            src="/surprise-box.png"
            height={300}
            width={300}
            className="object-contain dark:invert"
            alt="Reading"
          />
          <p className="text-muted-foreground">
            It looks like you haven&apos;t added any watchlist yet.
          </p>
        </div>
      )}
    </MaxWidthWrapper>
  );
}

function AnimeCard({ anime }: { anime: Favorite }) {
  return (
    <div className="group relative">
      <Link href={`/info?anime=${anime.animeId}`}>
        <div className="aspect-video rounded relative cursor-pointer">
          <Image src={anime.imgUrl!} alt="box" fill className="object-cover" />
          <div className="inset-0 opacity-0 group-hover:opacity-100 bg-black/70 z-10 absolute p-2 flex items-center justify-center">
            <PlayCircle className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="line-clamp-1 mt-2">{getTitle({ text: anime.title })}</h3>
        {anime.createdAt && (
          <Badge className="absolute right-0 top-0 rounded">
            {format(new Date(anime.createdAt), "MMM d, yyy")}
          </Badge>
        )}
      </Link>
      <div className="absolute right-0 bottom-0 rounded">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>{anime.title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
