"use client";

import React from "react";
import { ProjectItem } from "../ProjectItem";
import { Categories } from "@/shared/constants";
import useInfiniteProjects from "../hooks/useInfiniteProjects";
import { Button } from "@/components/Basic/Button";
import { ProjectType } from "../SmallProjectItem/constants";
import { NoItems } from "@/components/Basic/NoItems";

export interface Props {
  category: Categories;
  searchTerm: string;
}

const ProjectsList = ({ category, searchTerm }: Props) => {
  const { projects, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteProjects({
      category,
      searchTerm,
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!projects.length) return <NoItems text="No items to display" />;

  return (
    <>
      {projects.map((project) => (
        <ProjectItem
          type={ProjectType.RANKINGS}
          {...project}
          key={project.slug}
        />
      ))}
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} className="mx-auto mt-8">
          Show more
        </Button>
      )}
    </>
  );
};

export default ProjectsList;
