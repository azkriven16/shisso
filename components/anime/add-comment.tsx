"use client";
import { useUser } from "@clerk/nextjs";
import { Input } from "../ui/input";
import Image from "next/image";
import { trpc } from "@/app/_trpc/client";
import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function AddComment() {
  const { user } = useUser();
  const searchParams = useSearchParams();
  const episode = searchParams.get("episode") || "";
  const utils = trpc.useContext();
  const [comments, setComments] = useState("");

  const { mutate: addComment } = trpc.addComment.useMutation({
    onSuccess: () => {
      utils.getAllComments.invalidate();
      toast.success("Comment added.");
    },
    onMutate: () => {
      utils.getAllComments.invalidate();
      toast.loading("Loading...");
    },
    onSettled: () => {
      utils.getAllComments.invalidate();
      toast.dismiss();
    },
    onError: (error) => {
      utils.getAllComments.invalidate();
      toast.error(`${error.message}`);
    },
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addComment({
      comment: comments,
      episodeId: episode,
      userImg: user?.imageUrl!,
      userName: user?.fullName!,
      userId: user?.id!,
    });
    setComments("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="my-5 flex items-center gap-2 md:gap-5"
    >
      <Image
        src={user?.imageUrl!}
        alt="User Profile"
        height={40}
        width={40}
        className="rounded-full"
      />
      <Input
        placeholder="Enter your comment..."
        onChange={(e) => setComments(e.target.value)}
        value={comments}
      />
      <Button disabled={!comments.length}>Submit</Button>
    </form>
  );
}
