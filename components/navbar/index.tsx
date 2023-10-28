"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { SignInButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { NavItemsData, siteConfig } from "@/lib/constants";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "../max-width-wrapper";
import { Logo } from "../logo";
import { Button, buttonVariants } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import User from "./user";
import MobileNav from "./mobile-nav";
import Search from "./search";

export default function Navbar() {
  const scrolled = useScrollTop();
  const { isSignedIn, isLoaded } = useAuth();
  const path = usePathname();
  return (
    <nav
      className={cn(
        "fixed top-0 w-full bg-background z-50",
        scrolled && "border-b shadow-sm",
        path !== "/" && "border-b",
        path === "/video" && "z-[99999]"
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between">
        {!isSignedIn && <Logo />}
        {isSignedIn && (
          <>
            <div className="flex items-center">
              <div className="mr-2 md:mr-3 lg:mr-5">
                <div className="hidden md:inline-block">
                  <Logo />
                </div>
                <div className="md:hidden inline-block">
                  <MobileNav />
                </div>
              </div>
              {NavItemsData.map((item) => (
                <Link
                  key={item.href}
                  className={cn(
                    buttonVariants({
                      variant: path === item.href ? "secondary" : "ghost",
                    }),
                    "hidden md:inline-flex mx-0.5"
                  )}
                  href={item.href}
                >
                  <span className="font-semibold">{item.text}</span>
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="flex items-center gap-x-2 md:gap-x-5">
          {isSignedIn && <Search />}
          {!isSignedIn && isLoaded && (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size="sm">Get Started</Button>
              </SignInButton>
            </>
          )}

          {isSignedIn && isLoaded && (
            <>
              {path === "/" && (
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard">Enter {siteConfig.name}</Link>
                </Button>
              )}
              <User />
            </>
          )}
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
