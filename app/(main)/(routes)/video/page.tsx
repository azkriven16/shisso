"use client";

import Comments from "@/components/anime/comments";
import Grid from "@/components/anime/grid";
import Error from "@/components/error";
import Interactions from "@/components/interactions";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Spinner } from "@/components/spinner";
import VideoPlayer from "@/components/video-player";
import { useGetAnimeInfo, useGetEpisode } from "@/lib/anime";
import { cleanHtmlTags, getTitle } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export default function VideoPage() {
  const searchParams = useSearchParams();
  const anime = searchParams.get("anime");
  const episode = searchParams.get("episode");

  const { data: info, isLoading: infoLoading } = useGetAnimeInfo(
    anime as string
  );
  const { data, isLoading, isError } = useGetEpisode(episode as string);
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
          <h1 className="font-semibold text-xl md:text-2xl">
            {getTitle({ text: info?.title })}
          </h1>
          {info && <Interactions anime={info} />}

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
