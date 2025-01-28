import requests from "./requests";
import { withServerRequest } from "../requestBuilder/withServerRequest";

const serverRequest = {
  getNomiantionViewsCount: withServerRequest(requests.getNominationViewsCount),
  getNominationViewsBulkCount: withServerRequest(
    requests.getNominationsViewsBulkCount,
  ),
};

export default serverRequest;
