"use client";

import { CommentInput } from "../CommentInput";
import useMe from "@/shared/hooks/useMe";
import usePostComment from "../hooks/usePostComment";
import useInfiniteComments from "../hooks/useInfiniteComments";
import { CommentTree } from "../CommentTree";
import { Button } from "@/components/Basic/Button";
import Link from "next/link";

export interface Props {
  nominationId: string;
}
const CommentsList = ({ nominationId }: Props) => {
  const { me: user } = useMe();

  const { postNominationComment } = usePostComment({
    nominationId,
    userId: user?.id || "",
  });

  const { comments, hasNextPage, fetchNextPage } =
    useInfiniteComments(nominationId);

  return (
    <div className="w-full mb-8">
      {user ? (
        <CommentInput onSubmit={postNominationComment} className="mb-2" />
      ) : (
        <div className="mx-auto text-center text-lg">
          You must be{" "}
          <Link href="/login" className="text-blue underline">
            logged in{" "}
          </Link>
          to post a comment.
        </div>
      )}
      {comments?.length
        ? comments.map((com) => {
            return (
              <CommentTree
                key={com.id}
                comment={com}
                depth={1}
                nominationId={nominationId}
              />
            );
          })
        : null}
      {hasNextPage && (
        <Button className="mx-auto" onClick={() => fetchNextPage()}>
          View more
        </Button>
      )}
    </div>
  );
};

export default CommentsList;
