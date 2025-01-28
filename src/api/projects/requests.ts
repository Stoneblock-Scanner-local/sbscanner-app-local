import { publicConfig } from "@/shared/config/constants";
import { RequestBuilder } from "../requestBuilder/requestBuilder";
import queryString from "query-string";
import { Categories } from "@/shared/constants";
import { Project } from "./types";

const getProjects =
  (request: RequestBuilder<Project[]>) =>
  async (
    skip: number,
    take: number,
    category?: Categories,
    searchTerm?: string,
  ) => {
    const query = {
      skip,
      take,
      category,
      searchTerm,
    };

    const url = queryString.stringifyUrl({
      url: `${publicConfig.apiUrl}/projects`,
      query,
    });

    return request.call(url);
  };

const getProjectBySlug =
  (request: RequestBuilder<Project>) => async (slug: string) => {
    return request.call(`${publicConfig.apiUrl}/projects/${slug}`);
  };

const getFeaturedProject = (request: RequestBuilder<Project>) => async () => {
  return request.call(`${publicConfig.apiUrl}/projects/featured`);
};

const requests = {
  getProjects,
  getProjectBySlug,
  getFeaturedProject,
};

export default requests;
