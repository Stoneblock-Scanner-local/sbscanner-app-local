import { useQuery } from "@tanstack/react-query";
import commentsApi from "@/api/comments/client";

const useCommentsCount = (nominationId: string) => {
  const { data: commentsCount } = useQuery({
    queryFn: () => commentsApi.getNominationCommentsCount(nominationId),
    queryKey: ["comment-nomination-count", nominationId],
  });

  return commentsCount;
};

export default useCommentsCount;
