"use client";

import UpvoteIcon from "@/assets/icons/upvote.svg";
import DownvoteIcon from "@/assets/icons/downvote.svg";
import { twMerge } from "tailwind-merge";
import useVote from "../../hooks/useVote";
import { VoteValue } from "@/api/votes/types";
import useMe from "@/shared/hooks/useMe";

export interface Props {
  nominationId: string;
  type?: "small" | "big";
  className?: string;
}

const NominationVotes = ({
  nominationId,
  type = "small",
  className,
}: Props) => {
  const { me: user } = useMe();

  const { voteCounts, toggleVote, isUpVotedByMe, isDownVotedByMe } = useVote({
    nominationId,
    user,
  });

  return (
    <div className={twMerge("flex items-center gap-x-2", className)}>
      <button
        className="active:scale-95 ease-in-out duration-200"
        onClick={() => toggleVote(VoteValue.UP)}
        disabled={!user}
      >
        <UpvoteIcon
          className={twMerge(
            isUpVotedByMe ? "fill-blue" : "fill-grey-400 dark:fill-grey-300",
            type === "big" ? "w-8" : "w-5",
          )}
        />
      </button>
      <span
        className={twMerge(
          "text-grey-400",
          type === "big" ? "text-md" : "text-sm",
        )}
      >
        {voteCounts?.upVotes}
      </span>
      <button
        className="active:scale-95 ease-in-out duration-200"
        onClick={() => toggleVote(VoteValue.DOWN)}
        disabled={!user}
      >
        <DownvoteIcon
          className={twMerge(
            isDownVotedByMe ? "fill-blue" : "fill-grey-400 dark:fill-grey-300",
            type === "big" ? "w-8" : "w-5",
          )}
        />
      </button>
      <span
        className={twMerge(
          "text-grey-400",
          type === "big" ? "text-md" : "text-sm",
        )}
      >
        {voteCounts?.downVotes}
      </span>
    </div>
  );
};

export default NominationVotes;
