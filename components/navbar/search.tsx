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
import { useEffect, useState } from "react";
import { useSearch } from "@/lib/anime";
import { IAnimeResult } from "@/types";
import { cn, getTitle } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Search({ qProps }: { qProps?: string }) {
  const [isCtrlKPressed, setIsCtrlKPressed] = useState(false);
  const [query, setQuery] = useState<string>("");
  const isLg = useMediaQuery("(max-width: 1024px)");
  const skeletonArray = new Array(4).fill(null);
  const debounce = useDebounce(query, 500);
  const path = usePathname();
  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      setIsCtrlKPressed((prev) => !prev);
    }
  };

  useEffect(() => {
    if (path === "/info" && qProps) {
      setIsCtrlKPressed(true);
      setQuery(qProps || "");
    }
  }, [qProps]);
  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const { data, isFetching, isFetched, isError } = useSearch({
    episodeId: debounce,
  });

  return (
    <Dialog open={isCtrlKPressed} onOpenChange={setIsCtrlKPressed}>
      <DialogTrigger asChild>
        {!qProps && (
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
        )}
      </DialogTrigger>
      <DialogContent className="m-0 p-2 h-fit pt-[0.22rem]">
        <div className="flex items-center pl-2.5">
          <SearchIcon className="text-muted-foreground h-5 w-5" />
          <Input
            id="searchInput"
            className="border-none focus-visible:ring-0 rounded-none"
            placeholder="Search anime..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
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
                <DialogClose className="w-full">
                  <Button className="justify-start w-full" variant="ghost">
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
