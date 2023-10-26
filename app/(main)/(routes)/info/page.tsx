"use client";
import Banner from "../../_components/banner";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Grid from "@/components/anime/grid";
import Comments from "@/components/anime/comments";
import Interactions from "@/components/interactions";
import { useSearchParams } from "next/navigation";
import { useGetAnimeInfo } from "@/lib/anime";
import { cleanHtmlTags, getTitle } from "@/lib/utils";
import Error from "@/components/error";
import { Spinner } from "@/components/spinner";

export default function InfoPage() {
  const searchParams = useSearchParams();

  const anime = searchParams.get("anime");

  const { data, isLoading, isError } = useGetAnimeInfo(anime as string);

  if (isError) return <Error />;

  if (isLoading)
    return (
      <div className="py-36">
        <Spinner size="lg" />
      </div>
    );

  return (
    <>
      <Banner data={data} />
      <MaxWidthWrapper>
        <div>
          <h1 className="font-semibold text-xl md:text-2xl">
            {getTitle({ text: data?.title })}
          </h1>
          <div className="my-5">
            <Interactions anime={data} />
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-5">
            <div className="md:w-2/3">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {cleanHtmlTags({ text: data?.description })}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Grid data={data} hasEpisodes loading={isLoading} text="Episodes" />
        </div>
        <Comments />
      </MaxWidthWrapper>
    </>
  );
}
