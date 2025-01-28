import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import savedNominationsApi from "@/api/savedNominations/client";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants";
import { flatten } from "lodash";

export interface Props {
  searchTerm: string;
  userId: string;
}

const useInfiniteSavedNominations = ({ searchTerm, userId }: Props) => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["saved-nominations", searchTerm, userId],
    queryFn: async ({ pageParam }) => {
      return await savedNominationsApi.getSavedNominations(
        pageParam * DEFAULT_PAGE_SIZE,
        DEFAULT_PAGE_SIZE,
        searchTerm,
      );
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.length < DEFAULT_PAGE_SIZE) {
        return undefined;
      }
      return allPages.length;
    },
  });

  const nominations = useMemo(() => {
    return data ? flatten(data.pages) : [];
  }, [data]);

  return { nominations, isLoading, hasNextPage, fetchNextPage };
};

export default useInfiniteSavedNominations;
