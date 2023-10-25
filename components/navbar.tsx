"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import MaxWidthWrapper from "./max-width-wrapper";
import { Logo } from "./logo";
import { SignInButton, SignOutButton, useAuth, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { redirect, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Navbar() {
  const scrolled = useScrollTop();
  const { isSignedIn, isLoaded } = useAuth();
  const path = usePathname();
  const { user } = useUser();

  return (
    <nav
      className={cn(
        "fixed top-0 w-full min-h-[3.5rem] z-50 bg-background",
        scrolled && "border-b shadow-sm"
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-x-5">
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
              {path === "/" && (
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard">Enter {siteConfig.name}</Link>
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback>
                      {`${user?.firstName?.[0]}${user?.lastName?.[0]}`}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{user?.fullName}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    {user?.emailAddresses[0].emailAddress}
                  </DropdownMenuItem>
                  <SignOutButton signOutCallback={() => redirect("/")}>
                    <DropdownMenuItem>Sign Out</DropdownMenuItem>
                  </SignOutButton>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
