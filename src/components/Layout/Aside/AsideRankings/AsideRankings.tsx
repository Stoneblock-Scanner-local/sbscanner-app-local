import { AsideSectionWrapper } from "@/components/Layout/Wrappers/AsideSectionWrapper";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import PinIcon from "@/assets/icons/pin.svg";
import Link from "next/link";
import { SmallProjectItem } from "@/components/Application/Projects/SmallProjectItem";
import { CategoriesDto } from "@/shared/constants";
import { NoItems } from "@/components/Basic/NoItems";
import { ProjectType } from "@/components/Application/Projects/SmallProjectItem/constants";

export interface RankingItem {
  title: string;
  category?: CategoriesDto;
  categories?: CategoriesDto[];
  rating?: number;
  imageSrc?: string;
  slug?: string;
  id?: string;
}

export interface Props {
  projects: RankingItem[];
  title: string;
  type: ProjectType;
  seeMoreLink?: string;
  seeMoreLabel?: string;
}

const AsideRankings = ({
  projects,
  title,
  type,
  seeMoreLink,
  seeMoreLabel,
}: Props) => {
  return (
    <AsideSectionWrapper
      icon={<PinIcon className="w-8 stroke-primary" />}
      title={title}
    >
      {projects.length ? (
        <>
          {projects.map((item) => {
            return <SmallProjectItem key={item.title} {...item} type={type} />;
          })}

          {seeMoreLink && (
            <Link
              href={seeMoreLink}
              className="flex items-center text-blue text-sm gap-x-1 mt-8"
            >
              {seeMoreLabel || "See more"}
              <ArrowRightIcon className="w-4 stroke-blue" />
            </Link>
          )}
        </>
      ) : (
        <NoItems text="No items to display" className="mt-0 font-normal" />
      )}
    </AsideSectionWrapper>
  );
};

export default AsideRankings;
