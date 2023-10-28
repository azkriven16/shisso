"use client";
import { trpc } from "@/app/_trpc/client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { getTitle } from "@/lib/utils";
import { PlayCircle, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

export default function Favorites() {
  const { data, isLoading } = trpc.getUserFavorite.useQuery();
  const skeletonArray = new Array(10).fill(null);

  return (
    <MaxWidthWrapper className="my-10">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">
            Favorites - <span>{data?.length || "0"}</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Anime marked as favorites
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
              <Link
                href={`/info?anime=${anime.animeId}`}
                className="group relative"
              >
                <div className="aspect-video rounded relative cursor-pointer">
                  <Image
                    src={anime.imgUrl!}
                    alt="box"
                    fill
                    className="object-cover"
                  />
                  <div className="inset-0 opacity-0 group-hover:opacity-100 bg-black/70 z-10 absolute p-2 flex items-center justify-center">
                    <PlayCircle className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="line-clamp-1 mt-2">
                  {getTitle({ text: anime.title })}
                  {anime.createdAt && (
                    <Badge className="absolute right-0 top-0 rounded">
                      {format(new Date(anime.createdAt), "MMM d, yyy")}
                    </Badge>
                  )}
                </h3>
              </Link>
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
            It looks like you don&apos;t have any favorites yet.
          </p>
        </div>
      )}
    </MaxWidthWrapper>
  );
}
