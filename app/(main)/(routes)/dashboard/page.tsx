"use client";
import Error from "@/components/error";
import Grid from "@/components/anime/grid";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useGetGogo } from "@/lib/anime";
import { GetGogoType } from "@/types";
import { useSearchParams } from "next/navigation";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data, isLoading, isError } = useGetGogo({
    type: GetGogoType.TopAiring,
    page: page,
  });

  if (isError) return <Error />;

  return (
    <>
      <MaxWidthWrapper>
        <Grid
          data={data}
          loading={isLoading}
          text="Top Picks for You"
          pagination="dashboard"
          desc="Carefully selected anime recommendations"
        />
      </MaxWidthWrapper>
    </>
  );
}
