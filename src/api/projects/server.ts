import { withServerRequest } from "../requestBuilder/withServerRequest";
import requests from "./requests";

const serverRequests = {
  getProjects: withServerRequest(requests.getProjects),
  getProjectBySlug: withServerRequest(requests.getProjectBySlug),
  getFeaturedProject: withServerRequest(requests.getFeaturedProject),
};

export default serverRequests;
