import { Comment } from "../Comment";
import { Comment as CommentType } from "@/api/comments/types";
import useMe from "@/shared/hooks/useMe";

export interface Props {
  comment: CommentType;
  depth: number;
  nominationId: string;
  commentAuthor?: string;
}

const CommentTree = ({
  comment,
  depth,
  nominationId,
  commentAuthor,
}: Props) => {
  const { me: user } = useMe();

  const paddingStyle = {
    paddingLeft: `${24 * depth}px`,
  };

  return (
    <div className="flex flex-col">
      <Comment
        comment={comment}
        nominationId={nominationId}
        userId={user?.id || ""}
        replyTo={comment.repliedToCommentId && commentAuthor}
      />
      <div style={paddingStyle}>
        {comment.replies &&
          comment.replies.map((reply) => {
            return !reply.deleted ? (
              <CommentTree
                key={reply.id}
                comment={reply}
                commentAuthor={comment.author.displayName}
                depth={depth + 1}
                nominationId={nominationId}
              />
            ) : null;
          })}
      </div>
    </div>
  );
};

export default CommentTree;
