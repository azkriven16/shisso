"use client";
import { trpc } from "@/app/_trpc/client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { getTitle } from "@/lib/utils";
import { MoreVertical, PlayCircle, Search, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Favorite } from "@prisma/client";
import { toast } from "sonner";

export default function Watchlist() {
  const { data, isLoading } = trpc.getUserWatchlist.useQuery();
  const skeletonArray = new Array(10).fill(null);

  return (
    <MaxWidthWrapper className="my-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">Watchlist</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            You have {data?.length || "0"} anime in your watchlist.
          </p>
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
  const utils = trpc.useContext();

  const { mutate: removeFromWatchlist } = trpc.addUserWatchlist.useMutation({
    onSuccess: () => {
      utils.getUserWatchlist.invalidate();
      toast.success("Removed from watchlist");
    },
    onMutate: () => {
      utils.getUserWatchlist.invalidate();
      toast.loading("Loading...");
    },
    onSettled: () => {
      utils.getUserWatchlist.invalidate();
      toast.dismiss();
    },
    onError: (error) => {
      utils.getUserWatchlist.invalidate();
      toast.error(`${error.message}`);
    },
  });
  return (
    <div className="relative">
      <Link href={`/info?anime=${anime.animeId}`} className="group">
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
            <DropdownMenuItem
              role="button"
              onClick={() =>
                removeFromWatchlist({
                  animeId: anime.animeId,
                  id: anime.id,
                  imgUrl: anime.imgUrl!,
                  title: getTitle({ text: anime.title }),
                })
              }
            >
              <Trash className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
