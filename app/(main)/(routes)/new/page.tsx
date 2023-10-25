"use client";
import Error from "@/components/error";
import Navbar from "../../_components/navbar";
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
      <Navbar />
      <MaxWidthWrapper>
        <Grid data={data} loading={isLoading} text="New Anime" />
      </MaxWidthWrapper>
    </>
  );
}
