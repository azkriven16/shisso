import React from "react";

export default function Comments() {
  const comments = [
    {
      id: 1,
      user: "User 1",
      content: "Comment 1 content goes here.",
    },
    {
      id: 2,
      user: "User 2",
      content: "Comment 2 content goes here.",
    },
    {
      id: 3,
      user: "User 3",
      content: "Comment 3 content goes here.",
    },
  ];

  return (
    <div className="mx-auto mt-8">
      <div className="rounded-lg py-4">
        <h2 className="text-xl md:text-2xl font-semibold">Comments</h2>

        {comments.map((comment) => (
          <div key={comment.id} className="mt-4 p-4 border-t border">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{comment.user}</p>
                <p className="text-muted-foreground">{comment.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
