"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { siteConfig } from "@/lib/constants";

export function Heading() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <div className="max-w-3xl space-y-4 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Streamlined Anime Experience. Welcome to <span>{siteConfig.name}</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        <span>{siteConfig.name}</span> is the minimalist anime platform where{" "}
        <br />
        the best anime awaits you.
      </h3>
      {!isLoaded && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}

      {isSignedIn && isLoaded && (
        <Button asChild>
          <Link href="/dashboard">
            Enter {siteConfig.name}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}

      {!isSignedIn && isLoaded && (
        <SignInButton mode="modal">
          <Button>
            Get {siteConfig.name} <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
