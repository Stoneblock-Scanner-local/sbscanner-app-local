import { withClientRequest } from "../requestBuilder/withClientRequest";
import requests from "./requests";

const clientRequests = {
  getProjects: withClientRequest(requests.getProjects),
  getProjectBySlug: withClientRequest(requests.getProjectBySlug),
  getFeaturedProject: withClientRequest(requests.getFeaturedProject),
};

export default clientRequests;
