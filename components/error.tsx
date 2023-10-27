"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Error() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h2>
        <p className="text-muted-foreground">
          We're sorry, but an error occurred while loading this page.
        </p>
        <Button onClick={() => router.back()} className="mt-5">
          Go back
        </Button>
      </div>
    </div>
  );
}
