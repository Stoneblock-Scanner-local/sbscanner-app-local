import { Categories } from "@/shared/constants";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import projectsApi from "@/api/projects/client";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants";
import { flatten } from "lodash";

export interface Props {
  category: Categories;
  searchTerm: string;
}

const useInfiniteProjects = ({ category, searchTerm }: Props) => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["projects", category, searchTerm],
    queryFn: async ({ pageParam }) => {
      return await projectsApi.getProjects(
        pageParam * DEFAULT_PAGE_SIZE,
        DEFAULT_PAGE_SIZE,
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

  const projects = useMemo(() => {
    return data ? flatten(data.pages) : [];
  }, [data]);

  return { projects, isLoading, hasNextPage, fetchNextPage };
};

export default useInfiniteProjects;
