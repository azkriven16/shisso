"use client";
import Image from "next/image";
import MaxWidthWrapper from "../max-width-wrapper";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";

interface GridProps {
  loading: boolean;
}

export default function Grid({ loading }: GridProps) {
  const skeletonArray = new Array(10).fill(null);
  return (
    <MaxWidthWrapper
      className={cn(
        "h-full w-full grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5"
      )}
    >
      {loading
        ? skeletonArray.map((_, index) => (
            <Skeleton key={index} className="w-full aspect-video rounded" />
          ))
        : skeletonArray.map((_, index) => <AnimeCard key={index} />)}
    </MaxWidthWrapper>
  );
}

function AnimeCard() {
  return (
    <div>
      <div className="aspect-video bg-red-500 rounded relative group cursor-pointer">
        <Image src="/box.png" alt="box" fill className="object-cover" />
        <div className="inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black to-transparent z-10 absolute p-2 flex items-end justify-end">
          <h3 className="line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          </h3>
        </div>
      </div>
      <h3 className="line-clamp-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      </h3>
    </div>
  );
}
