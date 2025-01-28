import Image from "next/image";
import { Rating } from "@/components/Basic/Rating";
import { PROJECT_IMAGES, CategoriesDto } from "@/shared/constants";
import { ProjectType } from "./constants";
import Link from "next/link";
import { StarType } from "@/shared/types";
import { NominationRating } from "../Nomination/NominationRating";

export interface Props {
  title: string;
  type: ProjectType;
  category?: CategoriesDto;
  categories?: CategoriesDto[];
  rating?: number;
  imageSrc?: string;
  id?: string;
  slug?: string;
}

const SmallProjectItem = ({
  title,
  category,
  categories,
  type,
  rating = 0,
  imageSrc,
  id,
  slug,
}: Props) => {
  const projectCategory =
    type === ProjectType.RANKINGS ? category! : categories![0];

  return (
    <div className="flex w-full py-3 items-start whitespace-nowrap justify-between flex-wrap">
      <Link
        href={
          type === ProjectType.RANKINGS
            ? `/project/${slug}`
            : `/nomination/${id}`
        }
        className="flex gap-x-2"
      >
        <span className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
          <Image
            src={imageSrc || PROJECT_IMAGES[projectCategory]}
            alt={title}
            fill
            className="object-cover"
          />
        </span>
        <div className="flex flex-col gap-y-1">
          <span className="w-52 text-primary font-semibold text-s leading-5 text-ellipsis overflow-hidden whitespace-nowrap">
            {title}
          </span>
          <span className="text-grey-300 font-normal text-xs leading-5 ">
            {projectCategory}
          </span>
        </div>
      </Link>
      {type === ProjectType.RANKINGS ? (
        <Rating
          rating={rating}
          locked
          starType={StarType.BLUE}
          className="ml-10"
        />
      ) : (
        <NominationRating nominationId={id!} />
      )}
    </div>
  );
};

export default SmallProjectItem;
