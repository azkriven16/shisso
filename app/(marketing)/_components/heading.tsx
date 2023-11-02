"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { siteConfig } from "@/lib/constants";
import { ClerkLoading } from "@clerk/nextjs";

export function Heading() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <div className="max-w-3xl space-y-4 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        No distractions, just pure{" "}
        <span className="underline">
          <Link href="/new">anime</Link>
        </span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium md:px-10">
        A minimalistic anime streaming platform where every detail is designed
        for your ultimate enjoyment.
      </h3>
      <ClerkLoading>
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      </ClerkLoading>

      {isSignedIn && isLoaded && (
        <Button size="lg" asChild>
          <Link href="/dashboard" className="font-semibold">
            Enter {siteConfig.name}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}

      {!isSignedIn && isLoaded && (
        <SignInButton mode="modal">
          <Button size="lg" className="font-semibold">
            Get {siteConfig.name} free <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
