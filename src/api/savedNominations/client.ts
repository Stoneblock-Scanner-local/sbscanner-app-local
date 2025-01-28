import { withAuthenticatedClientRequest } from "../requestBuilder/withClientRequest";
import requests from "./requests";

const clientRequests = {
  toggleNomination: withAuthenticatedClientRequest(requests.toggleNomination),
  getSavedNominations: withAuthenticatedClientRequest(
    requests.getSavedNominations,
  ),
};

export default clientRequests;
