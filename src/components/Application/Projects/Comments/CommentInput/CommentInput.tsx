"use client";
import { useState } from "react";
import CommentIcon from "@/assets/icons/comments.svg";
import { twMerge } from "tailwind-merge";

interface Props {
  onSubmit: (text: string) => void;
  className?: string;
}

const CommentInput = ({ onSubmit, className }: Props) => {
  const [comment, setComment] = useState<string>("");

  const handlePostComment = async () => {
    onSubmit(comment);
    setComment("");
  };

  return (
    <div className={twMerge("flex flex-col gap-y-2", className)}>
      <textarea
        rows={3}
        placeholder="Add a comment..."
        className={twMerge(
          "bg-transparent resize-none lg:py-3 lg:px-6 px-3 py-2  outline-none w-full lg:min-h-[100px] h-14 lg:text-xl text-sm",
          "rounded-lg border-2 border-grey-100 dark:border-grey-300",
        )}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <span
        onClick={handlePostComment}
        className="ml-4 text-lg cursor-pointer flex items-center gap-x-2 text-[#67727E] font-medium"
      >
        <CommentIcon className="w-6 h-6" />
        Post
      </span>
    </div>
  );
};

export default CommentInput;
