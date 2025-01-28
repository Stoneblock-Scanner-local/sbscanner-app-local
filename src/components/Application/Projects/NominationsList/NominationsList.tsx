"use client";

import React from "react";
import { ProjectItem } from "../ProjectItem";
import { ProjectType } from "../SmallProjectItem/constants";
import { Categories } from "@/shared/constants";
import useInfiniteNominations from "../hooks/useInfiniteNominations";
import { ApprovalStage } from "@/shared/types";
import { Button } from "@/components/Basic/Button";
import { NoItems } from "@/components/Basic/NoItems";

export interface Props {
  type: ProjectType;
  category: Categories;
  stage: ApprovalStage;
  searchTerm: string;
}

const NominationsList = ({ category, type, stage, searchTerm }: Props) => {
  const { nominations, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteNominations({
      category,
      stage,
      searchTerm,
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!nominations.length) return <NoItems text="No items to display" />;

  return (
    <>
      {nominations.map((project) => {
        return <ProjectItem type={type} {...project} key={project.id} />;
      })}
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} className="mx-auto mt-8">
          Show more
        </Button>
      )}
    </>
  );
};

export default NominationsList;
