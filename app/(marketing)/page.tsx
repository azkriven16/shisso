import { auth } from "@clerk/nextjs";
import { Heading } from "./_components/heading";
import { Hero } from "./_components/hero";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/dashboard");
  return (
    <div className="px-5 pt-10">
      <Heading />
      <Hero />
    </div>
  );
}
