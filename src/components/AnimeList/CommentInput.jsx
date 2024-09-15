"use client";
import { useState } from "react";

const CommentInput = () => {
  const [comment, setComment] = useState("");

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePost = (event) => {
    event.preventDefault();
    console.log(comment);
  };

  return (
    <div className="flex flex-col gap-2">
      <textarea onChange={handleInput} className="w-full h-32 text-xl p-4" />
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
