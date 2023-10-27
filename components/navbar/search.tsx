import { SearchIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";

export default function Search() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon" variant="ghost" className="flex lg:hidden">
            <SearchIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="lg:flex hidden">
            <SearchIcon className="h-4 w-4 mr-2" />
            Search anime...{" "}
            <Badge variant="secondary" className="rounded ml-2 font-mono py-1">
              Ctrl K
            </Badge>
          </Button>
        </DialogTrigger>
        <DialogContent className="m-0 p-0 mb-5">
          <Input placeholder="Search anime..." />
        </DialogContent>
      </Dialog>
    </>
  );
}
