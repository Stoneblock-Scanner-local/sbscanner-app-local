import { withServerRequest } from "../requestBuilder/withServerRequest";
import requests from "./requests";

const serverRequests = {
  getNominationComments: withServerRequest(requests.getNominationComments),
  getNominationsCommentsBulkCount: withServerRequest(
    requests.getNominationsCommentsBulkCount,
  ),
};

export default serverRequests;
