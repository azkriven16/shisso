"use client";
import { trpc } from "@/app/_trpc/client";
import { SignInButton, useUser } from "@clerk/nextjs";
import { usePathname, useSearchParams } from "next/navigation";
import { MoreVertical, Trash } from "lucide-react";
import { toast } from "sonner";
import AddComment from "./add-comment";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Comments() {
  const searchParams = useSearchParams();
  const episode = searchParams.get("episode") || "";
  const utils = trpc.useContext();
  const { user } = useUser();

  const { data: allComments } = trpc.getAllComments.useQuery({
    episodeId: episode,
  });

  const { mutate: deleteComment } = trpc.deleteComment.useMutation({
    onSuccess: () => {
      utils.getAllComments.invalidate();
      toast.success("Comment deleted.");
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

  return (
    <div className="mx-auto mt-8 pb-20">
      <div className="rounded-lg py-4">
        <h2 className="text-lg md:text-xl font-semibold">Comments</h2>
        {user ? <AddComment /> : <NotAuthed />}
        {allComments?.length ? (
          allComments.map((comment) => (
            <div
              key={comment.id}
              className="flex justify-between items-center my-5 gap-2"
            >
              <Image
                src={comment.userImg}
                alt="User Avatar"
                height={35}
                width={35}
                className="rounded-full object-cover"
              />
              <Textarea
                readOnly
                className="text-sm text-muted-foreground resize-none"
              >
                {comment.comment}
              </Textarea>
              {user?.id === comment.userId && (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuItem
                      role="button"
                      onClick={() =>
                        deleteComment({
                          episodeId: episode,
                          comment: comment.comment,
                        })
                      }
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          ))
        ) : (
          <p className="text-center py-20">There are currently no comments.</p>
        )}
      </div>
    </div>
  );
}

const NotAuthed = () => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const anime = searchParams.get("anime") || "";
  const episode = searchParams.get("episode") || "";

  const handleClick = () => {
    toast.error("You must be logged in to comment.");
  };
  return (
    <div className="my-5 flex items-center gap-2 md:gap-5">
      <Input placeholder="You must be logged in to comment..." />
      <SignInButton
        afterSignInUrl={`${path}${anime && `?anime=${anime}`}${
          episode && `&episode=${episode}`
        }`}
        afterSignUpUrl={`${path}${anime && `?anime=${anime}`}${
          episode && `&episode=${episode}`
        }`}
        mode="modal"
      >
        <Button onClick={handleClick}>Submit</Button>
      </SignInButton>
    </div>
  );
};
