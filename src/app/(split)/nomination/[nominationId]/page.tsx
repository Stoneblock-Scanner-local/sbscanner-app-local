import { ProjectDetailsItem } from "@/components/Application/Projects/ProjectDetailsItem";
import { ImageNamePair } from "@/components/Basic/ImageNamePair";
import { NominationVotes } from "@/components/Application/Projects/Nomination/NominationVotes";
import { CommentsList } from "@/components/Application/Projects/Comments/CommentsList";
import nominationsApi from "@/api/nominations/server";
import { getQueryClient } from "@/shared/helpers";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { SetView } from "@/components/Basic/SetView";
import { NominationRating } from "@/components/Application/Projects/Nomination/NominationRating";
import { ApprovalStage } from "@/shared/types";

interface Props {
  params: { nominationId: string };
}

export async function generateMetadata({ params: { nominationId } }: Props) {
  const nomination = await nominationsApi.getSingleNomination(nominationId);

  return {
    title: `${nomination.title} nomination`,
  };
}

const NominationPage = async ({ params: { nominationId } }: Props) => {
  const queryClient = getQueryClient();

  const nomination = await nominationsApi.getSingleNomination(nominationId);

  // LEAVE IT LIKE THIS FOR NOW
  // await queryClient.prefetchQuery({
  //   queryKey: ["vote-nomination-count", nominationId],
  //   queryFn: async () => await votesApi.getNominationVoteCount(nominationId),
  // });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h3 className="text-4xl font-semibold my-10 text-center lg:text-start lg:mx-auto">
        {nomination.name}
      </h3>
      <ProjectDetailsItem label="Post title">
        {nomination.title}
      </ProjectDetailsItem>
      <ProjectDetailsItem label="Creator">
        <ImageNamePair
          user={nomination.creator}
          labelClassName="text-lg"
          className="gap-x-2"
          isBig
        />
      </ProjectDetailsItem>
      <ProjectDetailsItem label="Name">{nomination.name}</ProjectDetailsItem>
      <ProjectDetailsItem label="Website">
        <a href={nomination.website}>{nomination.website}</a>
      </ProjectDetailsItem>
      <ProjectDetailsItem label="Description">
        {nomination.description}
      </ProjectDetailsItem>
      <ProjectDetailsItem label="Category">
        {nomination.categories[0]}
      </ProjectDetailsItem>
      <ProjectDetailsItem label="X">
        <a href={nomination.socialX}>{nomination.socialX || "/"}</a>
      </ProjectDetailsItem>
      <ProjectDetailsItem label="Instagram">
        <a href={nomination.socialInstagram}>
          {nomination.socialInstagram || "/"}
        </a>
      </ProjectDetailsItem>
      <ProjectDetailsItem label="Discord">
        <a href={nomination.socialDiscord}>{nomination.socialDiscord || "/"}</a>
      </ProjectDetailsItem>
      <ProjectDetailsItem label="Other info">
        {nomination.otherInfo}
      </ProjectDetailsItem>
      {nomination.approvalStage === ApprovalStage.VOTE_APPROVED && (
        <NominationVotes
          nominationId={nominationId}
          type="big"
          className="py-8"
        />
      )}
      {nomination.approvalStage === ApprovalStage.RATE_APPROVED && (
        <NominationRating
          nominationId={nominationId}
          className="py-8"
          starClassName="w-8"
        />
      )}
      <SetView nominationId={nominationId} />
      <CommentsList nominationId={nominationId} />
    </HydrationBoundary>
  );
};

export default NominationPage;
