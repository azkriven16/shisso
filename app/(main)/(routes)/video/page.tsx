"use client";

import Comments from "@/components/anime/comments";
import Grid from "@/components/anime/grid";
import Error from "@/components/error";
import Interactions from "@/components/anime/interactions";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Spinner } from "@/components/spinner";
import { useGetAnimeInfo, useGetEpisode } from "@/lib/anime";
import { cleanHtmlTags, getTitle } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import VideoPlayer from "@/components/anime/video-player";
import { IAnimeEpisode } from "@/types";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VideoPage() {
  const searchParams = useSearchParams();
  const anime = searchParams.get("anime");
  const episode = searchParams.get("episode");

  const { data: info, isLoading: infoLoading } = useGetAnimeInfo(
    anime as string
  );
  const { data, isLoading, isError, refetch } = useGetEpisode(
    episode as string
  );

  const currentEpisode: IAnimeEpisode = info?.episodes?.find(
    (ep: IAnimeEpisode) => ep.id === episode
  );
  const currentEpIndex = info?.episodes?.indexOf(currentEpisode);

  const nextEpId = info?.episodes[currentEpIndex + 1]?.id;
  const prevEpId = info?.episodes[currentEpIndex - 1]?.id;

  if (isError) return <Error />;

  if (isLoading)
    return (
      <div className="py-36">
        <Spinner size="lg" />
      </div>
    );

  return (
    <>
      <div className="bg-black w-screen">
        <div className="mx-auto max-w-3xl">
          {data && <VideoPlayer episode={data} />}
        </div>
      </div>

      <MaxWidthWrapper className="space-y-10">
        <div className="space-y-3">
          <div className="flex sm:flex-row gap-3 sm:gap-0 flex-col justify-between">
            <h1 className="font-semibold text-xl md:text-2xl">
              {getTitle({ text: info?.title })}{" "}
            </h1>
            <div className="self-end flex gap-5">
              <a href={`/video?anime=${anime}&episode=${prevEpId}`}>
                <Button
                  size="sm"
                  variant="secondary"
                  disabled={prevEpId === undefined}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" /> prev
                </Button>
              </a>
              <a href={`/video?anime=${anime}&episode=${nextEpId}`}>
                <Button
                  size="sm"
                  variant="secondary"
                  disabled={nextEpId === undefined}
                >
                  next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
          <Interactions anime={info} />
          <p>Episode {currentEpisode?.number}</p>

          <div className="flex justify-between flex-col md:flex-row gap-5">
            <div className="md:w-2/3">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {cleanHtmlTags({ text: info?.description })}
              </p>
            </div>
          </div>
        </div>

        <div>
          <Grid data={info} hasEpisodes loading={infoLoading} text="Episodes" />
        </div>

        <Comments />
      </MaxWidthWrapper>
    </>
  );
}
