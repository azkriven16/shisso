"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import MaxWidthWrapper from "./max-width-wrapper";
import { Logo } from "./logo";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export default function Navbar() {
  const scrolled = useScrollTop();
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <nav
      className={cn(
        "fixed top-0 w-full min-h-[3.5rem] z-50 bg-background",
        scrolled && "border-b shadow-sm"
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-x-2">
          {!isSignedIn && isLoaded && (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size="sm">Get {siteConfig.name} free</Button>
              </SignInButton>
            </>
          )}

          {isSignedIn && isLoaded && (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">Enter {siteConfig.name}</Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
