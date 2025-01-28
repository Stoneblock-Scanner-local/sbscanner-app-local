"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { ApplyFormLinks } from "./ApplyFormLinks";
import { AsideNominations } from "./AsideNominations";
import { AsideRankings } from "./AsideRankings";
import { AsideNews } from "./AsideNews";
import { ProjectType } from "@/components/Application/Projects/SmallProjectItem/constants";
import { ASIDE_CONTENT_BY_PATH, ASIDE_CONTENT_TYPES } from "./constants";
import { Project } from "@/api/projects/types";
import { Nomination } from "@/api/nominations/types";
import { usePathname } from "next/navigation";

export interface Props {
  className?: string;
  news: any;
  rankingsProjects: Project[];
  rankingsNominations: Nomination[];
  nominations: Nomination[];
}

const matchPath = (pathname: string) => {
  for (const pattern in ASIDE_CONTENT_BY_PATH) {
    const regex = new RegExp("^" + pattern.replace(/:\w+/g, "[\\w-]+") + "$");
    if (regex.test(pathname)) {
      return ASIDE_CONTENT_BY_PATH[pattern];
    }
  }
  return null;
};

const Aside = ({
  className,
  news,
  rankingsProjects,
  rankingsNominations,
  nominations,
}: Props) => {
  const pathname = usePathname();

  const ASIDE_COMPONENTS = {
    [ASIDE_CONTENT_TYPES.APPLY_FORM_LINKS]: <ApplyFormLinks />,
    [ASIDE_CONTENT_TYPES.RANKINGS]: (
      <AsideRankings
        projects={rankingsProjects}
        title="SBScanner rankings"
        seeMoreLink="/projects/rankings"
        seeMoreLabel="See all ranked projects"
        type={ProjectType.RANKINGS}
      />
    ),
    [ASIDE_CONTENT_TYPES.COMMUNITY_PROJECTS]: (
      <AsideRankings
        projects={rankingsNominations}
        title="Community rated projects"
        seeMoreLink="/projects/community"
        seeMoreLabel="See more suggestions"
        type={ProjectType.COMMUNITY}
      />
    ),
    [ASIDE_CONTENT_TYPES.POPULAR_NOMINATIONS]: (
      <AsideNominations nominations={nominations} />
    ),
    [ASIDE_CONTENT_TYPES.NEWS]: <AsideNews news={news} />,
  };

  return (
    <aside
      className={twMerge(
        "flex flex-col items-center lg:items-start w-full lg:pl-10 pt-12 lg:border-l-2 border-grey-100 dark:border-grey-300 max-w-[384px]",
        className,
      )}
    >
      {matchPath(pathname)?.map((type, ix) => {
        return (
          <React.Fragment key={ix}>{ASIDE_COMPONENTS[type]}</React.Fragment>
        );
      })}
    </aside>
  );
};

export default Aside;
