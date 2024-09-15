import React from "react";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";

const page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.user_email },
  });

  return (
    <div className="grid grid-cols-1 px-4 py-8 gap-4">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="bg-color-primary color-text-dark p-4"
          >
            <p className="text-sm font-bold">{comment.anime_title}</p>
            <p className="italic">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
