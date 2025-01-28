import { Rating } from "@/components/Basic/Rating";
import { StarType } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";

export interface Props {
  imageSrc: string;
  title: string;
  slug: string;
  isFeatured: boolean;
  description?: string;
  rating?: number;
}

const BigProjectItem = ({
  imageSrc,
  title,
  slug,
  isFeatured,
  description,
  rating,
}: Props) => {
  return (
    <div className="rounded flex flex-col gap-y-6">
      <div className="w-full h-full flex flex-col gap-y-3">
        {isFeatured ? (
          <div className="flex flex-col">
            <Link
              href={`/project/${slug}`}
              className="relative w-full aspect-16/9"
            >
              <Image src={imageSrc} alt={title} fill className="object-cover" />
            </Link>
            <span className="p-3 border-b border-grey-100 text-lg lg:text-2xl font-medium">
              Featured Project
            </span>
          </div>
        ) : (
          <Link
            href={`/project/${slug}`}
            className="relative w-full aspect-16/9"
          >
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </Link>
        )}

        <div className="flex flex-col gap-y-5 lg:px-3">
          <Link
            href={`/project/${slug}`}
            className="leading-tight text-3xl font-semibold"
          >
            {title}
          </Link>
          {description && (
            <span className="text-sm leading-relaxed text-ellipsis overflow-hidden line-clamp-4">
              {description}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-y-1 lg:px-3">
        {rating && (
          <div className="flex gap-x-6 items-center">
            {/* <PostInfo {...stats} /> */}
            <Rating rating={rating} starType={StarType.BLUE} locked />
          </div>
        )}
        {/* <Bookmark big /> */}
      </div>
    </div>
  );
};

export default BigProjectItem;
