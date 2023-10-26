"use client";
import Error from "@/components/error";
import Grid from "@/components/anime/grid";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useGetGogo } from "@/lib/anime";
import { GetGogoType } from "@/types";

export default function NewPage() {
  const { data, isLoading, isError } = useGetGogo({
    type: GetGogoType.RecentEpisodes,
  });

  if (isError) return <Error />;

  return (
    <>
      <MaxWidthWrapper>
        <Grid data={data} loading={isLoading} text="New Anime" />
      </MaxWidthWrapper>
    </>
  );
}
