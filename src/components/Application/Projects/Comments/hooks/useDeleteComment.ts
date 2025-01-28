import commentsApi from "@/api/comments/client";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const useDeleteComment = (nominationId: string) => {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteComment } = useMutation({
    mutationFn: (commentId: string) =>
      commentsApi.deleteNominationComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["nomination-comments", nominationId],
      });
      queryClient.invalidateQueries({
        queryKey: ["comment-nomination-count", nominationId],
      });
    },
  });

  return { deleteComment };
};

export default useDeleteComment;
