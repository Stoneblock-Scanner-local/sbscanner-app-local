import { withAuthenticatedServerRequest } from "../requestBuilder/withServerRequest";
import requests from "./requests";

const serverRequests = {
  getSavedNominations: withAuthenticatedServerRequest(
    requests.getSavedNominations,
  ),
};

export default serverRequests;
