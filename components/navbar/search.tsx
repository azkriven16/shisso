"use client";
import { SearchIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { useMediaQuery } from "usehooks-ts";

export default function Search() {
  const isLg = useMediaQuery("(max-width: 1024px)");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={isLg ? "icon" : "default"} variant="outline">
          <SearchIcon className="h-4 w-4 lg:mr-2" />
          <span className="lg:inline hidden">Search anime... </span>
          <Badge
            variant="secondary"
            className="rounded ml-2 font-mono py-1 lg:inline hidden"
          >
            Ctrl K
          </Badge>
        </Button>
      </DialogTrigger>
      <DialogContent className="m-0 p-0 pt-[0.22rem]">
        <Input placeholder="Search anime..." />
      </DialogContent>
    </Dialog>
  );
}
