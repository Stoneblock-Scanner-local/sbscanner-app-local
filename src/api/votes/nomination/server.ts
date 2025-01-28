import { withServerRequest } from "@/api/requestBuilder/withServerRequest";
import requests from "./requests";

const serverRequest = {
  getNominationVotesBulkCount: withServerRequest(
    requests.getNominationVotesBulkCount,
  ),
  getNominationVoteCount: withServerRequest(requests.getNominationVoteCount),
};

export default serverRequest;
