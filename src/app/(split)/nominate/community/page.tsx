import { NominateProjectForm } from "@/components/Application/Projects/NominateProjectForm";

export const metadata = {
  title: "Community nomination",
};

const NominateCommunityPage = () => {
  return (
    <div className="pb-32">
      <h1 className="text-4xl font-semibold pt-12 pb-16">
        Welcome to project nomination
      </h1>
      <NominateProjectForm />
      <span></span>
    </div>
  );
};

export default NominateCommunityPage;
