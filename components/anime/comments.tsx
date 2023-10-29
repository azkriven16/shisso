"use client";
import { trpc } from "@/app/_trpc/client";
import { useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import AddComment from "./add-comment";

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
    <div className="mx-auto mt-8">
      <div className="rounded-lg py-4">
        <h2 className="text-lg md:text-xl font-semibold">Comments</h2>
        {user && <AddComment />}
        {allComments?.length ? (
          allComments.map((comment) => (
            <div
              key={comment.id}
              className="mt-4 p-4 border-t border flex items-center gap-5 w-full justify-between"
            >
              <div className="flex gap-5">
                <img
                  src={comment.userImg}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{comment.userName}</p>
                  <p className="text-muted-foreground text-sm">
                    {comment.comment}
                  </p>
                </div>
              </div>
              {user?.id === comment.userId && (
                <Button variant="destructive" size="icon">
                  <Trash
                    onClick={() =>
                      deleteComment({
                        episodeId: episode,
                        comment: comment.comment,
                      })
                    }
                    className="w-4 h-4"
                  />
                </Button>
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
