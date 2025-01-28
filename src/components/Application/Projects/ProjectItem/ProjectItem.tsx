import React from "react";
import { User } from "@/api/users/types";
import Image from "next/image";
import { Rating } from "@/components/Basic/Rating";
import { ImageNamePair } from "@/components/Basic/ImageNamePair";
import Link from "next/link";
import { ProjectType } from "../SmallProjectItem/constants";
import { PostInfo } from "@/components/Basic/PostInfo";
import { twMerge } from "tailwind-merge";
import { Bookmark } from "@/components/Basic/Bookmark";
import { NominationVotes } from "../Nomination/NominationVotes";
import { StarType } from "@/shared/types";
import { NominationRating } from "../Nomination/NominationRating";

export interface Props {
  imageSrc?: string;
  title: string;
  description: string;
  type: string;
  rating?: number;
  slug?: string;
  id?: string;
  creator?: User;
}

const ProjectItem = ({
  imageSrc,
  title,
  description,
  type,
  rating,
  slug,
  id,
  creator,
}: Props) => {
  return (
    <div className="rounded flex flex-col gap-y-6 px-3">
      <Link
        href={
          type === ProjectType.RANKINGS
            ? `/project/${slug}`
            : `/nomination/${id}`
        }
        className="w-full h-full flex flex-col gap-y-3 lg:flex-row-reverse items-start gap-x-12"
      >
        <span
          className={twMerge(
            "relative lg:w-48 aspect-16/9  shrink-0",
            imageSrc && "w-1/2",
          )}
        >
          {imageSrc && (
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          )}
        </span>
        <div className="flex flex-col gap-y-3 w-full">
          <span className="leading-tight text-2xl font-medium text-ellipsis overflow-hidden line-clamp-1">
            {title}
          </span>
          <span className="text-xs leading-relaxed text-ellipsis overflow-hidden line-clamp-4">
            {description}
          </span>
        </div>
      </Link>
      <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-y-1">
        <div className="flex gap-x-6 items-center">
          {type !== ProjectType.RANKINGS && <PostInfo nominationId={id!} />}
          {type === ProjectType.RANKINGS ? (
            <Rating rating={rating} starType={StarType.BLUE} locked />
          ) : type === ProjectType.COMMUNITY ? (
            <NominationRating nominationId={id!} />
          ) : (
            <NominationVotes nominationId={id!} />
          )}
        </div>
        <div className="flex gap-x-4 items-center">
          {type !== ProjectType.RANKINGS && (
            <Bookmark type="big" nominationId={id!} />
          )}
          {creator && <ImageNamePair user={creator} labelClassName="text-md" />}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
