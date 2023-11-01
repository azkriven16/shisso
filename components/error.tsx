"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";

interface ErrorProps {
  headline?: string;
  subheadline?: string;
}

export default function Error({ headline, subheadline }: ErrorProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-2xl font-bold mb-2">
        {headline || "Oops! Something went wrong."}
      </h2>
      <p className="text-muted-foreground">
        {subheadline ||
          "We're sorry, but an error occurred while loading this page."}
      </p>
      <Image
        src="/mailbox.png"
        className="object-contain"
        alt="Box"
        height={300}
        width={300}
      />
      <Button onClick={() => router.back()} className="mt-5 w-full">
        Go back
      </Button>
    </div>
  );
}
