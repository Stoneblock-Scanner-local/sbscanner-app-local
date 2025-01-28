import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import voteApi from "@/api/votes/nomination/client";
import { VoteValue } from "@/api/votes/types";
import { User } from "@/api/users/types";
import { useState, useEffect } from "react";

interface Props {
  nominationId: string;
  user: User | null | undefined;
}

const useVote = ({ nominationId, user }: Props) => {
  const queryClient = useQueryClient();

  const isMeUpVote = user?.nominationVotes.some(
    (vote) => vote.nominationId === nominationId && vote.vote === VoteValue.UP,
  );

  const isMeDownVote = user?.nominationVotes.some(
    (vote) =>
      vote.nominationId === nominationId && vote.vote === VoteValue.DOWN,
  );
  const [isUpVotedByMe, setIsUpVotedByMe] = useState(isMeUpVote);
  const [isDownVotedByMe, setDownUpVotedByMe] = useState(isMeDownVote);

  useEffect(() => {
    setIsUpVotedByMe(isMeUpVote);
  }, [isMeUpVote]);

  useEffect(() => {
    setDownUpVotedByMe(isMeDownVote);
  }, [isMeDownVote]);

  const { data: voteCounts } = useQuery({
    queryFn: () => voteApi.getNominationVoteCount(nominationId),
    queryKey: ["vote-nomination-count", nominationId],
  });

  const { mutateAsync: toggleVote } = useMutation({
    mutationFn: (voteValue: VoteValue) =>
      voteApi.toggleNominationVote(nominationId, voteValue),
    onMutate: (voteValue) => {
      queryClient.cancelQueries({
        queryKey: ["vote-nomination-count", nominationId],
      });

      const previousVote = queryClient.getQueryData([
        "vote-nomination-count",
        nominationId,
      ]);

      queryClient.setQueryData(
        ["vote-nomination-count", nominationId],
        (old: any) => {
          if (voteValue === VoteValue.UP && isUpVotedByMe) {
            setIsUpVotedByMe((prev) => !prev);
            return { ...old, upVotes: old.upVotes - 1 };
          }

          if (voteValue === VoteValue.UP && !isUpVotedByMe) {
            setIsUpVotedByMe((prev) => !prev);

            isDownVotedByMe && setDownUpVotedByMe((prev) => !prev);

            return { ...old, upVotes: old.upVotes + 1 };
          }

          if (voteValue === VoteValue.DOWN && isDownVotedByMe) {
            setDownUpVotedByMe((prev) => !prev);
            return { ...old, downVotes: old.downVotes - 1 };
          }

          if (voteValue === VoteValue.DOWN && !isDownVotedByMe) {
            setDownUpVotedByMe((prev) => !prev);

            isUpVotedByMe && setIsUpVotedByMe((prev) => !prev);

            return { ...old, downVotes: old.downVotes + 1 };
          }
        },
      );

      return { previousVote };
    },
    onError: (_e, _v, context) => {
      queryClient.setQueryData(
        ["vote-nomination-count", nominationId],
        context?.previousVote,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["vote-nomination-count", nominationId],
      });
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  return {
    voteCounts,
    toggleVote,
    isUpVotedByMe,
    isDownVotedByMe,
  };
};

export default useVote;
