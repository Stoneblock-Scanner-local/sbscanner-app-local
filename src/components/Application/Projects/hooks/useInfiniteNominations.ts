import { Categories } from "@/shared/constants";
import { ApprovalStage } from "@/shared/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import nominationsApi from "@/api/nominations/client";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants";
import { flatten } from "lodash";

export interface Props {
  category: Categories;
  stage: ApprovalStage;
  searchTerm: string;
}

const useInfiniteNominations = ({ category, stage, searchTerm }: Props) => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["nominations", stage, category || "all", searchTerm],
    queryFn: async ({ pageParam }) => {
      return await nominationsApi.getNominations(
        pageParam * DEFAULT_PAGE_SIZE,
        DEFAULT_PAGE_SIZE,
        stage,
        category,
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

export default useInfiniteNominations;
