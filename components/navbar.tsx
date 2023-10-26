"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import MaxWidthWrapper from "./max-width-wrapper";
import { Logo } from "./logo";
import { SignInButton, SignOutButton, useAuth, useUser } from "@clerk/nextjs";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { NavItemsData, siteConfig } from "@/lib/constants";
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
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const scrolled = useScrollTop();
  const { isSignedIn, isLoaded } = useAuth();
  const path = usePathname();
  const { user } = useUser();

  return (
    <nav
      className={cn(
        "fixed top-0 w-full min-h-[3.5rem] z-[99999] bg-background",
        scrolled && "border-b shadow-sm"
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between">
        {isSignedIn && (
          <>
            <div className="flex items-center">
              <div className="mr-5 md:mr-10">
                <Logo />
              </div>
              {NavItemsData.map((item) => (
                <Link
                  key={item.href}
                  className={cn(
                    buttonVariants({
                      variant: path === item.href ? "secondary" : "ghost",
                    })
                  )}
                  href={item.href}
                >
                  <span className="font-semibold">{item.text}</span>
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="flex items-center gap-x-5">
          <Search className="h-5 w-5 mx-2" />
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
                    <AvatarImage asChild src={user?.imageUrl}>
                      <Image
                        src={user?.imageUrl!}
                        alt="logo"
                        width={40}
                        height={40}
                      />
                    </AvatarImage>
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
                  <SignOutButton>
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
