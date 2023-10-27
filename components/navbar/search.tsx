"use client";
import { SearchIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { useMediaQuery, useDebounce } from "usehooks-ts";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSearch } from "@/lib/anime";
import { IAnimeResult } from "@/types";
import { cn, getTitle } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

export default function Search() {
  const [query, setQuery] = useState("");
  const isLg = useMediaQuery("(max-width: 1024px)");
  const skeletonArray = new Array(4).fill(null);
  const debounce = useDebounce(query, 500);

  const { data, isFetching, isFetched, isError } = useSearch({
    episodeId: debounce,
  });

  console.log(data);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={isLg ? "icon" : "default"} variant="outline">
          <SearchIcon className="h-4 w-4 lg:mr-2" />
          <span className="lg:inline hidden">Search anime... </span>
          <Badge
            variant="secondary"
            className="rounded ml-2 font-mono py-1 lg:inline hidden"
          >
            Ctrl K
          </Badge>
        </Button>
      </DialogTrigger>
      <DialogContent className="m-0 p-2 h-fit pt-[0.22rem]">
        <div className="flex items-center pl-2.5">
          <SearchIcon className="text-muted-foreground h-5 w-5" />
          <Input
            className="border-none focus-visible:ring-0 rounded-none"
            placeholder="Search anime..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        {isFetched && data?.results?.length === 0 && (
          <p className="text-muted-foreground text-center py-10">
            No results found.
          </p>
        )}

        {isError && (
          <p className="text-muted-foreground text-center py-10">
            An error has occured.
          </p>
        )}

        {isFetching && (
          <div className="flex flex-col gap-1">
            {skeletonArray.map((_, index) => (
              <Skeleton key={index} className="w-full h-8 rounded" />
            ))}
          </div>
        )}

        {isFetched && data?.results?.length !== 0 && (
          <div
            className={cn(
              "flex flex-col overflow-y-scroll overflow-x-hidden max-h-72",
              !data?.results && "hidden"
            )}
          >
            {data?.results?.map((item: IAnimeResult) => (
              <Link
                key={item.id}
                href={`/info?anime=${item.id}`}
                className="w-full flex"
              >
                <DialogClose>
                  <Button className="justify-start" variant="ghost">
                    <Badge variant="secondary" className="mr-2">
                      {item?.subOrDub}
                    </Badge>
                    {getTitle({ text: item.id })}
                    <Badge variant="secondary" className="ml-2">
                      {item?.releaseDate || "Released: NA"}
                    </Badge>
                  </Button>
                </DialogClose>
              </Link>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
