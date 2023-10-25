"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Error() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded p-6">
        <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h2>
        <p className="text-gray-600">
          We're sorry, but an error occurred while loading this page.
        </p>
        <Button onClick={() => router.back()} className="mt-5">
          Go back
        </Button>
      </div>
    </div>
  );
}
