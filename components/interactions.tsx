import React from "react";
import { Button } from "./ui/button";
import { Bookmark, Heart } from "lucide-react";

export default function Interactions() {
  return (
    <div className="flex-grow flex gap-3">
      <Button variant="ghost" className="flex items-center gap-2">
        <Heart /> Favorite
      </Button>
      <Button variant="ghost" className="flex items-center gap-2">
        <Bookmark /> Bookmark
      </Button>
    </div>
  );
}
