"use client";
import Image from "next/image";
import MaxWidthWrapper from "../max-width-wrapper";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  PlayCircle,
} from "lucide-react";
import { Button } from "../ui/button";

interface GridProps {
  loading: boolean;
  text: string;
}

export default function Grid({ loading, text }: GridProps) {
  const skeletonArray = new Array(10).fill(null);
  return (
    <>
      <h1 className="text-xl md:text-2xl font-semibold">{text}</h1>
      <div className="flex justify-end mt-2">
        <Button variant="ghost" className="flex items-center gap-2">
          <ChevronLeftCircle />
          <span className="hidden sm:inline">Previous</span>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2">
          <span className="hidden sm:inline">Next</span> <ChevronRightCircle />
        </Button>
      </div>
      <div
        className={cn(
          "h-full w-full grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5"
        )}
      >
        {loading
          ? skeletonArray.map((_, index) => (
              <Skeleton key={index} className="w-full aspect-video rounded" />
            ))
          : skeletonArray.map((_, index) => <AnimeCard key={index} />)}
      </div>

      <div className="flex justify-end">
        <Button variant="ghost" className="flex items-center gap-2">
          <ChevronLeftCircle />
          <span className="hidden sm:inline">Previous</span>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2">
          <span className="hidden sm:inline">Next</span> <ChevronRightCircle />
        </Button>
      </div>
    </>
  );
}

function AnimeCard() {
  return (
    <Link href="/info" className="group">
      <div className="aspect-video bg-red-500 rounded relative cursor-pointer">
        <Image src="/box.png" alt="box" fill className="object-cover" />
        <div className="inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black to-transparent z-10 absolute p-2 flex items-center justify-center">
          <PlayCircle className="h-8 w-8 text-white" />
        </div>
      </div>
      <h3 className="line-clamp-1 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      </h3>
    </Link>
  );
}
