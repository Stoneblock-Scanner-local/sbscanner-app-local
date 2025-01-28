import { withClientRequest } from "@/api/requestBuilder/withClientRequest";
import { withAuthenticatedClientRequest } from "@/api/requestBuilder/withClientRequest";
import requests from "./requests";

const clientRequests = {
  toggleNominationVote: withAuthenticatedClientRequest(
    requests.toggleNominationVote,
  ),
  getNominationVoteCount: withClientRequest(requests.getNominationVoteCount),
};

export default clientRequests;
