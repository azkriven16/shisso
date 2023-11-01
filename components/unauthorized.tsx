"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { ClerkLoading, SignInButton } from "@clerk/nextjs";
import { Spinner } from "./spinner";

interface UnauthorizedProps {
  page: string;
  img: string;
}

export default function Unauthorized({ page, img }: UnauthorizedProps) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-2xl font-bold mb-2">
        {`Oops! You need to login to access ${page}.`}
      </h2>
      <p className="text-muted-foreground">
        We're sorry, but an error occurred while loading this page.
      </p>
      <Image
        src={img}
        className="object-contain"
        alt="Box"
        height={300}
        width={300}
      />
      <ClerkLoading>
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      </ClerkLoading>
      <SignInButton mode="modal">
        <Button className="mt-5 w-full">Sign In</Button>
      </SignInButton>
    </div>
  );
}
