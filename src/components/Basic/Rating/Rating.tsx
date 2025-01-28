"use client";

import React, { useState } from "react";
import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";
import { StarType } from "@/shared/types";

export interface Props {
  id?: string;
  rating?: number;
  onRate?: (rating: number) => void;
  locked?: boolean;
  starType?: StarType;
  className?: string;
  starClassName?: string;
}

const Rating = ({
  rating = 0,
  onRate,
  locked,
  starType,
  className,
  starClassName,
}: Props) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleStarClick = (clickedRating: number) => {
    if (!locked && onRate) {
      onRate(clickedRating);
    }
  };

  return (
    <div className={className}>
      {[...Array(5)].map((_, index) => {
        const starColor = locked
          ? index < rating
            ? starType == StarType.BLUE
              ? "fill-blue"
              : "fill-gold"
            : "fill-grey-100"
          : index < (hoveredRating ?? rating)
            ? starType == StarType.BLUE
              ? "fill-blue"
              : "fill-gold"
            : "fill-grey-100";

        return (
          <div
            key={index}
            className={twMerge(
              "inline-block",
              locked ? "cursor-default" : "cursor-pointer",
            )}
            onMouseEnter={() => setHoveredRating(index + 1)}
            onMouseLeave={() => setHoveredRating(null)}
            onClick={() => handleStarClick(index + 1)}
          >
            <StarIcon className={`w-4 ${starColor} ${starClassName}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
