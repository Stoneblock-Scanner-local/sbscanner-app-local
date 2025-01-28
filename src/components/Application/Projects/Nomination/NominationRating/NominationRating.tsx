"use client";

import { Rating } from "@/components/Basic/Rating";
import { StarType } from "@/shared/types";
import useMe from "@/shared/hooks/useMe";
import useAuthenticatedAction from "@/shared/hooks/useAuthenticatedAction";
import useRating from "../../hooks/useRating";

export interface Props {
  nominationId: string;
  className?: string;
  starClassName?: string;
}

const NominationRating = ({
  nominationId,
  className,
  starClassName,
}: Props) => {
  const { me: user } = useMe();
  const { rating, isRatedByMe, createRating } = useRating({
    nominationId,
    user,
  });

  const onCheckedRate = useAuthenticatedAction(createRating);

  return (
    <Rating
      rating={rating}
      locked={isRatedByMe}
      onRate={onCheckedRate}
      starType={StarType.GOLD}
      className={className}
      starClassName={starClassName}
    />
  );
};

export default NominationRating;
