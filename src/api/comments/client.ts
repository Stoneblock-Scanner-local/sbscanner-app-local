import {
  withAuthenticatedClientRequest,
  withClientRequest,
} from "../requestBuilder/withClientRequest";
import requests from "./requests";

const clientRequests = {
  createComment: withAuthenticatedClientRequest(
    requests.createNominationComment,
  ),
  getNominationComments: withClientRequest(requests.getNominationComments),
  deleteNominationComment: withAuthenticatedClientRequest(
    requests.deleteNominationComment,
  ),
  getNominationCommentsCount: withClientRequest(
    requests.getNominationCommentsCount,
  ),
};

export default clientRequests;
