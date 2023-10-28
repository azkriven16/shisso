"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Search from "./navbar/search";
import { useState } from "react";

export default function Undefined({ anime }: { anime: string }) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const triggerCtrlKAndCtrlVFunctionality = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      {anime && openModal ? <Search qProps={anime} /> : null}
      <div>
        <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h2>
        <p className="text-muted-foreground">
          It's not you, it's us. An error occurred while trying to load this
          page.
        </p>
        <Button onClick={triggerCtrlKAndCtrlVFunctionality} className="mt-5">
          Try again (Search)
        </Button>
      </div>
    </div>
  );
}
