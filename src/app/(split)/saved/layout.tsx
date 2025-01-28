import { ReactNode } from "react";
import { redirect } from "next/navigation";
import usersApi from "@/api/users/server";

// const projectsMenu = [
//   { label: "Projects", link: "/saved/projects" },
//   { label: "Nominations", link: "/saved/nominations" },
// ];

const SavedProjectsLayout = async ({ children }: { children: ReactNode }) => {
  const user = await usersApi.getMe();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex flex-col gap-y-16 mb-16">
      <h1 className="text-4xl font-semibold pt-12 text-center lg:text-start">
        Saved projects & nominations
      </h1>
      {/* <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-y-10 flex-wrap">
          <Menu menu={projectsMenu} className="ml-2" />
        </div> */}
      {children}
    </div>
  );
};

export default SavedProjectsLayout;
