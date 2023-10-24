import React from "react";
import Banner from "../../_components/banner";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Grid from "@/components/anime/grid";
import Comments from "@/components/anime/comments";
import { Bookmark, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InfoPage() {
  return (
    <>
      <Banner hasCover />
      <MaxWidthWrapper>
        <div>
          <h1 className="font-semibold text-xl md:text-2xl">
            Shingeki no Kyojin
          </h1>
          <div className="flex justify-between flex-col md:flex-row gap-5">
            <div className="md:w-2/3">
              <p className="text-sm text-muted-foreground line-clamp-3">
                Several hundred years ago, humans were nearly exterminated by
                titans. Titans are typically several stories tall, seem to have
                no intelligence, devour human beings and, worst of all, seem to
                do it for the pleasure rather than as a food source.
              </p>
            </div>
            <div className="flex-grow flex md:justify-end gap-3 mt-3">
              <Button variant="ghost" className="flex items-center gap-2">
                <Heart /> Favorite
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <Bookmark /> Bookmark
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Grid loading={false} text="Episodes" />
        </div>
        <Comments />
      </MaxWidthWrapper>
    </>
  );
}
