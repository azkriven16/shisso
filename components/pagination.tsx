import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function Pagination() {
  return (
    <div className="flex justify-end">
      <Button variant="ghost" className="flex items-center gap-2">
        <ChevronLeftCircle />
        <span className="hidden sm:inline">Previous</span>
      </Button>
      <Button variant="ghost" className="flex items-center gap-2">
        <span className="hidden sm:inline">Next</span> <ChevronRightCircle />
      </Button>
    </div>
  );
}
