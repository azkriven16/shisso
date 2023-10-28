import { db } from "@/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
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
