import { withAuthenticatedClientRequest } from "../requestBuilder/withClientRequest";
import requests from "./requests";

const clientRequests = {
  createProjectAudit: withAuthenticatedClientRequest(
    requests.createProjectAudit,
  ),
};

export default clientRequests;
