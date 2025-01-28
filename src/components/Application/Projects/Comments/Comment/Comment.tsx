"use client";
import React, { useState } from "react";
import { ImageNamePair } from "@/components/Basic/ImageNamePair";
import ReplyIcon from "@/assets/icons/reply.svg";
import RemoveIcon from "@/assets/icons/remove.svg";
import { CommentInput } from "../CommentInput";
import { Comment } from "@/api/comments/types";
import useComment from "../hooks/usePostComment";
import useDeleteComment from "../hooks/useDeleteComment";
import { timeAgo } from "@/shared/utilities";
import useMe from "@/shared/hooks/useMe";

export interface Props {
  comment: Comment;
  nominationId: string;
  userId: string;
  replyTo?: string;
}

const Comment = ({ comment, nominationId, userId, replyTo }: Props) => {
  const [isReplyInputOpen, setIsReplyInputOpen] = useState(false);

  const { me } = useMe();

  const { postNominationComment: postNominationReply } = useComment({
    userId: userId,
    nominationId,
    repliedToCommentId: comment.id,
  });

  const { deleteComment } = useDeleteComment(nominationId);

  return (
    <>
      <div className="max-w-full p-4">
        <div className="flex items-center lg:gap-x-4 mb-5 gap-x-2">
          <ImageNamePair
            user={comment.author}
            labelClassName="font-semibold text-[#334253] text-[16px]"
            className="lg:gap-x-4 gap-x-2"
          />
          <span className="text-comment whitespace-nowrap">
            {timeAgo(comment.createdAt)}
          </span>
          <span className="ml-auto flex gap-x-4">
            {comment.author.id === userId && !comment.deleted && (
              <button
                className="flex items-center gap-x-2"
                onClick={() => deleteComment(comment.id)}
              >
                <RemoveIcon className="w-4 fill-black dark:fill-red" />
                <span className="text-red font-semibold">Delete</span>
              </button>
            )}
            {!comment.repliedToCommentId && me && (
              <button
                className="flex items-center gap-x-2"
                onClick={() => setIsReplyInputOpen((prev) => !prev)}
              >
                <ReplyIcon className="w-4 fill-blue" />
                <span className="text-blue font-semibold">Reply</span>
              </button>
            )}
          </span>
        </div>
        <span className="text-primary w-full block p-4 rounded-xl border-[2px] dark:bg-black dark:bg-opacity-60 bg-gray-200 border-transparent">
          <span className="text-blue mr-2 font-medium">
            {replyTo && `@${replyTo}`}
          </span>
          {comment.text}
        </span>
      </div>
      {isReplyInputOpen && (
        <CommentInput
          onSubmit={(text: string) => {
            postNominationReply(text);
            setIsReplyInputOpen(false);
          }}
          className="p-4"
        />
      )}
    </>
  );
};

export default Comment;
