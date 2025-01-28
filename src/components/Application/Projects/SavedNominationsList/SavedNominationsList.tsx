"use client";

import React from "react";
import { ProjectItem } from "../ProjectItem";
import { Button } from "@/components/Basic/Button";
import useInfiniteSavedNominations from "../hooks/useInfiniteSavedNominations";
import { ProjectType } from "../SmallProjectItem/constants";
import { ApprovalStage } from "@/shared/types";
import { NoItems } from "@/components/Basic/NoItems";

export interface Props {
  searchTerm: string;
  userId: string;
}

const SavedNominationsList = ({ searchTerm, userId }: Props) => {
  const { nominations, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteSavedNominations({ searchTerm, userId });

  if (isLoading) return <div>Loading...</div>;

  if (!nominations.length) return <NoItems text="No items to display" />;

  return (
    <>
      <span className="flex flex-col gap-y-4">
        {nominations.map((nomination) => {
          return (
            <ProjectItem
              type={
                nomination.approvalStage === ApprovalStage.VOTE_APPROVED
                  ? ProjectType.NOMINATIONS
                  : ProjectType.COMMUNITY
              }
              {...nomination}
              key={nomination.id}
            />
          );
        })}
      </span>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} className="mx-auto mt-8">
          Show more
        </Button>
      )}
    </>
  );
};

export default SavedNominationsList;
