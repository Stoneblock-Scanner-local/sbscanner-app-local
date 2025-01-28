import { SmallNominationItem } from "@/components/Application/Projects/SmallNominationItem";
import { AsideSectionWrapper } from "../../Wrappers/AsideSectionWrapper";
import Link from "next/link";
import PopularIcon from "@/assets/icons/popular.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { NoItems } from "@/components/Basic/NoItems";
import { Nomination } from "@/api/nominations/types";

export interface Props {
  nominations: Nomination[];
}

const AsideNominations = ({ nominations }: Props) => {
  return (
    <AsideSectionWrapper
      icon={<PopularIcon className="w-8 fill-primary" />}
      title="Popular nominations"
    >
      {nominations.length ? (
        <>
          {nominations.map((item) => {
            return <SmallNominationItem key={item.id} {...item} />;
          })}
          <Link
            href="/projects/nominations"
            className="flex items-center text-blue text-sm gap-x-1 mt-8"
          >
            See all <ArrowRightIcon className="w-4 stroke-blue" />
          </Link>
        </>
      ) : (
        <NoItems text="No items to display" className="mt-0 font-normal" />
      )}
    </AsideSectionWrapper>
  );
};

export default AsideNominations;
