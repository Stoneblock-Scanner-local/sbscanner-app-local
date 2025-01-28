import { ReactNode } from "react";
import { ProjectsMenu } from "@/components/Application/Projects/ProjectsMenu";

export interface Props {
  children: ReactNode;
}

export const metadata = {
  title: "Projects",
};

const ProjectsLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-y-16 lg:mb-16">
      <h1 className="text-4xl font-semibold pt-12 text-center lg:text-start">
        Welcome to SBScanner
      </h1>
      <ProjectsMenu />
      {children}
    </div>
  );
};

export default ProjectsLayout;
