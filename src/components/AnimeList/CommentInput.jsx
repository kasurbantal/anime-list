"use client";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePost = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };
    try {
      const response = await fetch("/api/v1/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const postComment = await response.json();
      console.log({ comment });
      if (postComment.status == 200) {
        setIsCreated(postComment.isCreated);
        setComment("");
      }
      return;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-color-accent">comment was sent</p>}
      <textarea
        onChange={handleInput}
        value={comment}
        className="w-full h-32 text-xl p-4"
      />
      <button
        onClick={handlePost}
        className=" w-52 px-2 py-3 bg-color-accent rounded"
      >
        Post Comment
      </button>
    </div>
  );
};

export default CommentInput;
