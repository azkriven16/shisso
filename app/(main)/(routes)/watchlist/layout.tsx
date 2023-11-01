import Unauthorized from "@/components/unauthorized";
import { db } from "@/db";
import { auth } from "@clerk/nextjs";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Watchlist",
};
export default async function Layout({ children }: { children: ReactNode }) {
  const { userId } = auth();

  if (!userId) {
    return <Unauthorized page="watchlist" img="/support.png" />;
  }

  const dbUser = await db.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!dbUser) {
    return redirect("/auth-callback?origin=dashboard");
  }
  return <>{children}</>;
}
