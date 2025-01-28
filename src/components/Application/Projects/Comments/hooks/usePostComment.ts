import { useQueryClient, useMutation } from "@tanstack/react-query";
import commentsApi from "@/api/comments/client";

interface Props {
  nominationId: string;
  userId: string;
  repliedToCommentId?: string;
}

const usePostComment = ({
  nominationId,
  userId,
  repliedToCommentId,
}: Props) => {
  const queryClient = useQueryClient();

  const { mutateAsync: postNominationComment } = useMutation({
    mutationFn: (text: string) =>
      commentsApi.createComment(text, userId, nominationId, repliedToCommentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["nomination-comments", nominationId],
      });
      queryClient.invalidateQueries({
        queryKey: ["comment-nomination-count", nominationId],
      });
    },
  });

  return { postNominationComment };
};

export default usePostComment;
