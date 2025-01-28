"use client";

import { Input } from "@/components/Basic/Input";
import SearchIcon from "@/assets/icons/search.svg";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SEARCH_COMPATIBLE_PAGES } from "@/shared/constants";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchTerm = searchParams.get("searchTerm");

  const [search, setSearch] = useState(searchTerm);

  const onChange = (e: any) => {
    const value = e.target.value;
    setSearch(value);
    if (SEARCH_COMPATIBLE_PAGES.includes(pathname)) {
      if (value) {
        router.replace(`${pathname}?searchTerm=${value}`);
      } else {
        router.replace(pathname);
      }
    }
  };

  const onKeyDown = (e: any) => {
    if (e.key === "Enter") {
      onSubmit(e.target.value);
    }
  };

  const onSubmit = (value: string) => {
    if (!SEARCH_COMPATIBLE_PAGES.includes(pathname)) {
      router.replace(`/projects/rankings?searchTerm=${value}`);
    }
  };

  useEffect(() => {
    setSearch(searchTerm);
  }, [searchTerm, pathname]);

  return (
    <Input
      name="search"
      className="rounded-lg"
      startIcon={<SearchIcon />}
      placeholder="Search..."
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={search || ""}
    />
  );
};

export default Search;
