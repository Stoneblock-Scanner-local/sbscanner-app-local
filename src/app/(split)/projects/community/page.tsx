import React from "react";
import { ProjectType } from "@/components/Application/Projects/SmallProjectItem/constants";
import nominationsApi from "@/api/nominations/server";
import { ApprovalStage } from "@/shared/types";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants";
import NominationsList from "@/components/Application/Projects/NominationsList/NominationsList";
import { Categories } from "@/shared/constants";
import { getQueryClient } from "@/shared/helpers";
import commentsApi from "@/api/comments/server";
import viewsApi from "@/api/views/server";
import { Nomination } from "@/api/nominations/types";

const CommunityPage = async ({
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
      ApprovalStage.RATE_APPROVED,
      category,
      searchTerm,
    ],
    queryFn: async () => {
      nominations = await nominationsApi.getNominations(
        0,
        DEFAULT_PAGE_SIZE,
        ApprovalStage.RATE_APPROVED,
        category as Categories,
        searchTerm,
      );
      return nominations;
    },
    initialPageParam: 0,
  });

  if (nominations.length > 0) {
    const [nominationCommentCount, nominationViewsCount] = await Promise.all([
      await commentsApi.getNominationsCommentsBulkCount(
        nominations.map((n) => n.id),
      ),
      await viewsApi.getNominationViewsBulkCount(nominations.map((n) => n.id)),
    ]);

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
        category={category as Categories}
        type={ProjectType.COMMUNITY}
        stage={ApprovalStage.RATE_APPROVED}
        searchTerm={searchTerm || ""}
      />
    </HydrationBoundary>
  );
};

export default CommunityPage;
