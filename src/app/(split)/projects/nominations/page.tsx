import React from "react";
import { ProjectType } from "@/components/Application/Projects/SmallProjectItem/constants";
import nominationsApi from "@/api/nominations/server";
import { ApprovalStage } from "@/shared/types";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Categories, DEFAULT_PAGE_SIZE } from "@/shared/constants";
import { NominationsList } from "@/components/Application/Projects/NominationsList";
import { getQueryClient } from "@/shared/helpers";
import { Nomination } from "@/api/nominations/types";
import votesApi from "@/api/votes/nomination/server";
import commentsApi from "@/api/comments/server";
import viewsApi from "@/api/views/server";

const NominationsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { category, searchTerm } = searchParams;

  const queryClient = getQueryClient();

  let nominations: Nomination[] = [];

  await queryClient.prefetchInfiniteQuery({
    queryKey: [
      "nominations",
      ApprovalStage.VOTE_APPROVED,
      category || "all",
      searchTerm,
    ],
    queryFn: async () => {
      nominations = await nominationsApi.getNominations(
        0,
        DEFAULT_PAGE_SIZE,
        ApprovalStage.VOTE_APPROVED,
        category as Categories,
        searchTerm,
      );

      return nominations;
    },
    initialPageParam: 0,
  });

  if (nominations.length > 0) {
    const [nominationVoteCount, nominationCommentCount, nominationViewsCount] =
      await Promise.all([
        await votesApi.getNominationVotesBulkCount(
          nominations.map((n) => n.id),
        ),
        await commentsApi.getNominationsCommentsBulkCount(
          nominations.map((n) => n.id),
        ),
        await viewsApi.getNominationViewsBulkCount(
          nominations.map((n) => n.id),
        ),
      ]);

    Object.entries(nominationVoteCount).forEach(async ([key, value]) => {
      await queryClient.prefetchQuery({
        queryKey: ["vote-nomination-count", key],
        queryFn: () => value,
      });
    });

    Object.entries(nominationCommentCount).forEach(async ([key, value]) => {
      await queryClient.prefetchQuery({
        queryKey: ["comment-nomination-count", key],
        queryFn: () => value,
      });
    });

    Object.entries(nominationViewsCount).forEach(async ([key, value]) => {
      await queryClient.prefetchQuery({
        queryKey: ["views-nomination-count", key],
        queryFn: () => value,
      });
    });
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NominationsList
        type={ProjectType.NOMINATIONS}
        stage={ApprovalStage.VOTE_APPROVED}
        category={category as Categories}
        searchTerm={searchTerm || ""}
      />
    </HydrationBoundary>
  );
};

export default NominationsPage;
