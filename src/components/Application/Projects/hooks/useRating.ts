import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ratingsApi from "@/api/ratings/client";
import { User } from "@/api/users/types";

interface Props {
  nominationId: string;
  user: User | null | undefined;
}

const useRating = ({ nominationId, user }: Props) => {
  const queryClient = useQueryClient();

  const isRatedByMe = user?.nominationRatings?.some(
    (rating) => rating.nominationId === nominationId,
  );

  const { data: rating } = useQuery({
    queryFn: () => ratingsApi.getRating(nominationId),
    queryKey: ["rating-nomination-average", nominationId],
  });

  const { mutateAsync: createRating } = useMutation({
    mutationFn: (rating: number) =>
      ratingsApi.createRating(nominationId, rating),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["rating-nomination-average", nominationId],
      });
      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
    },
  });

  return {
    rating,
    createRating,
    isRatedByMe,
  };
};

export default useRating;
