"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Logo } from "../logo";
import { Menu } from "lucide-react";
import { NavItemsData } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const path = usePathname();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen h-screen pt-4">
          <DropdownMenuLabel className="mt-1">
            <Logo />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {NavItemsData.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({
                  variant: path === item.href ? "secondary" : "ghost",
                  size: "lg",
                }),
                "flex justify-start pl-0"
              )}
            >
              <DropdownMenuItem className="w-full h-full">
                <span className="font-semibold text-lg">{item.text}</span>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
