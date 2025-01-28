"use client";

import { DropdownInput } from "@/components/Basic/DropdownInput";
import { Menu } from "@/components/Basic/Menu";
import { Categories } from "@/shared/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const options = [
  { label: "All", value: "" },
  { label: "Defi", value: Categories.Defi },
  { label: "Developer tooling", value: Categories.DeveloperTooling },
  { label: "Gaming", value: Categories.Gaming },
  { label: "Intrastructure", value: Categories.Infrastructure },
  { label: "NFT", value: Categories.Nft },
  { label: "Social", value: Categories.Social },
  { label: "Other", value: Categories.Other },
];

const menuItems = [
  { label: "Rankings", link: "/projects/rankings" },
  { label: "Community Projects", link: "/projects/community" },
  { label: "Popular Nominations", link: "/projects/nominations" },
];

const ProjectsMenu = () => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const onFilterChange = (option: string) => {
    router.push(option ? `${path}?category=${option}` : path);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-y-10 flex-wrap">
      <Menu menu={menuItems} className="ml-2" />
      <DropdownInput
        options={options}
        selectedOption={category as Categories}
        onChange={onFilterChange}
        text="Filter by: "
      />
    </div>
  );
};

export default ProjectsMenu;
