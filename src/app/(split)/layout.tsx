import { Aside } from "@/components/Layout/Aside";
import { PageContentWrapper } from "@/components/Layout/Wrappers/PageContentWrapper";
import { ApprovalStage } from "@/shared/types";
import nominationsApi from "@/api/nominations/server";
import projectsApi from "@/api/projects/server";
import newsApi from "@/api/news/server";
import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

const MainLayout = async ({ children }: Props) => {
  const [news, rankingsProjects, rankingsNominations, nominations] =
    await Promise.all([
      newsApi.getNews(0, 2),
      projectsApi.getProjects(0, 3),
      nominationsApi.getNominations(0, 4, ApprovalStage.RATE_APPROVED),
      nominationsApi.getNominations(0, 4, ApprovalStage.VOTE_APPROVED),
    ]);

  return (
    <PageContentWrapper className="flex flex-col lg:flex-row gap-x-32">
      <main className="basis-[65%]">{children}</main>
      <Aside
        className="basis-[35%]"
        news={news}
        rankingsProjects={rankingsProjects}
        rankingsNominations={rankingsNominations}
        nominations={nominations}
      />
    </PageContentWrapper>
  );
};

export default MainLayout;
