"use client";
import { useAuth } from "@clerk/nextjs";
import { Heading } from "./_components/heading";
import { Hero } from "./_components/hero";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = useAuth();

  if (userId) redirect("/dashboard");

  return (
    <div className="px-5 pt-10">
      <Heading />
      <Hero />
    </div>
  );
}
