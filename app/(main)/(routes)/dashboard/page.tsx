import React from "react";
import Navbar from "../../_components/navbar";
import Grid from "@/components/anime/grid";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <Grid loading={false} />
    </>
  );
}
