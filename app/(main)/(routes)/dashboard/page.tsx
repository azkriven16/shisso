import React from "react";
import Navbar from "../../_components/navbar";
import Grid from "@/components/anime/grid";
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <Grid
          loading={false}
          text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
        assumenda?"
        />
      </MaxWidthWrapper>
    </>
  );
}
