import savedNominationsApi from "@/api/savedNominations/server";
import { getQueryClient } from "@/shared/helpers";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { SavedNominationsList } from "@/components/Application/Projects/SavedNominationsList";
import usersApi from "@/api/users/server";

export async function generateMetadata() {
  const user = await usersApi.getMe();

  return {
    title: `${user?.displayName} saved nominations`,
  };
}

const SavedNominationsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { searchTerm } = searchParams;

  const user = await usersApi.getMe();

  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["saved-nominations", user?.id, searchTerm],
    queryFn: async () => {
      const nominations = await savedNominationsApi.getSavedNominations(
        0,
        DEFAULT_PAGE_SIZE,
        searchTerm || "",
      );

      return nominations;
    },
    initialPageParam: 0,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SavedNominationsList searchTerm={searchTerm || ""} userId={user!.id} />
      </HydrationBoundary>
    </>
  );
};

export default SavedNominationsPage;
