import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <MaxWidthWrapper>
      <nav className="flex items-start gap-5 flex-col-reverse sm:flex-row justify-between">
        <div className="space-x-2">
          <Button>New</Button>
          <Button variant="outline">Trending</Button>
          <Button variant="outline">Popular</Button>
          <Button variant="outline">Genre</Button>
        </div>

        <div className="flex items-center flex-row-reverse sm:flex-row">
          <Input />
          <Search className="h-8 w-8 mx-2" />
        </div>
      </nav>
    </MaxWidthWrapper>
  );
}
