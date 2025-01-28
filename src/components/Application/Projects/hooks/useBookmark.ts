import { useMutation, useQueryClient } from "@tanstack/react-query";
import savedNominationsApi from "@/api/savedNominations/client";
import { User } from "@/api/users/types";

interface Props {
  nominationId: string;
  user: User | null | undefined;
}

const useBookmark = ({ nominationId, user }: Props) => {
  const queryClient = useQueryClient();

  const isSavedByMe = user?.savedNominations?.some(
    (nomination) => nomination.id === nominationId,
  );

  const { mutateAsync: toggleNomination } = useMutation({
    mutationFn: () => savedNominationsApi.toggleNomination(nominationId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["saved-nominations"],
      });
      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
    },
  });

  return {
    toggleNomination,
    isSavedByMe,
  };
};

export default useBookmark;
