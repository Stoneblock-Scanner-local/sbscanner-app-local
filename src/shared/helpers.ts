import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";
import { ProjectAuditForm } from "./types";
import { Categories } from "./constants";

export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 5 * 60 * 1000,
        },
      },
    }),
);

export const transformCategoriesToArray = (form: Partial<ProjectAuditForm>) => {
  const nomination = {
    ...form,
    categories: [
      form.categoryDefi && Categories.Defi,
      form.categoryDeveloperTooling && Categories.DeveloperTooling,
      form.categoryGaming && Categories.Gaming,
      form.categoryInfrastructure && Categories.Infrastructure,
      form.categoryNft && Categories.Nft,
      form.categorySocial && Categories.Social,
      form.categoryOther && Categories.Other,
    ].filter(Boolean) as Categories[],
  };

  return nomination;
};
