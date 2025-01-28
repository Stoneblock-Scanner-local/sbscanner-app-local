import { BigProjectItem } from "@/components/Application/Projects/BigProjectItem";
import { ProjectAuditSection } from "@/components/Application/Projects/ProjectAuditSection";
import projectsApi from "@/api/projects/server";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params: { slug } }: Props) {
  const project = await projectsApi.getProjectBySlug(slug);

  return {
    title: `${project.title} project`,
  };
}

const ProjectPage = async ({ params: { slug } }: Props) => {
  const project = await projectsApi.getProjectBySlug(slug);
  if (!project) {
    // TODO: redirect to 404
    return null;
  }

  return (
    <div className="py-12 flex flex-col gap-y-10">
      <BigProjectItem
        {...project}
        rating={undefined}
        description={undefined}
        isFeatured={false}
      />
      {project.sections.map((section) => {
        return <ProjectAuditSection key={section.title} {...section} />;
      })}
      <ProjectAuditSection {...project.conclusion} />
    </div>
  );
};

export default ProjectPage;
