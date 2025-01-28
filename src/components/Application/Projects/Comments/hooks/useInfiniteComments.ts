import commentsApi from "@/api/comments/client";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants";
import { useInfiniteQuery } from "@tanstack/react-query";
import { flatten } from "lodash";
import { useMemo } from "react";

const useInfiniteComments = (nominationId: string) => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["nomination-comments", nominationId],
    queryFn: async ({ pageParam }) => {
      return await commentsApi.getNominationComments(
        pageParam * DEFAULT_PAGE_SIZE,
        DEFAULT_PAGE_SIZE,
        nominationId,
      );
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < DEFAULT_PAGE_SIZE) {
        return undefined;
      }
      return allPages.length;
    },
  });

  const comments = useMemo(() => {
    return data ? flatten(data.pages) : [];
  }, [data]);

  return { comments, hasNextPage, fetchNextPage };
};

export default useInfiniteComments;
