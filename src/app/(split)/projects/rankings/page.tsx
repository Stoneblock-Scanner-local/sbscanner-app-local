import { BigProjectItem } from "@/components/Application/Projects/BigProjectItem";
import { Categories, DEFAULT_PAGE_SIZE } from "@/shared/constants";
import projectsApi from "@/api/projects/server";
import { ProjectsList } from "@/components/Application/Projects/ProjectsList";
import { getQueryClient } from "@/shared/helpers";

const RankingsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { category, searchTerm } = searchParams;

  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["projects", category, searchTerm],
    queryFn: async () => {
      const projects = await projectsApi.getProjects(
        0,
        DEFAULT_PAGE_SIZE,
        category as Categories,
        searchTerm,
      );

      return projects;
    },
    initialPageParam: 0,
  });

  const featuredProject = await projectsApi.getFeaturedProject();

  return (
    <>
      {category || searchTerm || !featuredProject ? null : (
        <BigProjectItem {...featuredProject!} />
      )}
      <ProjectsList
        category={category as Categories}
        searchTerm={searchTerm || ""}
      />
    </>
  );
};

export default RankingsPage;
