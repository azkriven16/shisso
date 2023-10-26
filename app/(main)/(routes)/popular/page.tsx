"use client";
import Grid from "@/components/anime/grid";
import Error from "@/components/error";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useGetPopular } from "@/lib/anime";

export default function NewPage() {
  const { data, isLoading, isError } = useGetPopular({ page: 1 });

  if (isError) return <Error />;

  return (
    <>
      <MaxWidthWrapper>
        <Grid data={data} loading={isLoading} text="New Anime" />
      </MaxWidthWrapper>
    </>
  );
}
