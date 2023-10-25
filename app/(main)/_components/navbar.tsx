"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { NavItemsData } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const path = usePathname();
  return (
    <MaxWidthWrapper>
      <nav className="flex items-start sm:items-center gap-5 flex-col-reverse sm:flex-row justify-between">
        <div className="space-x-2 space-y-2">
          {NavItemsData.map((item) => (
            <Link
              className={cn(
                buttonVariants({
                  variant: path === item.href ? "default" : "outline",
                })
              )}
              href={item.href}
            >
              {item.text}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Genre <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center flex-row-reverse sm:flex-row mt-2">
          <Input />
          <Search className="h-8 w-8 mx-2" />
        </div>
      </nav>
    </MaxWidthWrapper>
  );
}
