import { withAuthenticatedClientRequest } from "../requestBuilder/withClientRequest";
import requests from "./requests";

const clientRequests = {
  uploadPresentation: withAuthenticatedClientRequest(
    requests.uploadPresentation,
  ),
  uploadProfile: withAuthenticatedClientRequest(requests.uploadProfile),
};

export default clientRequests;
