import { withServerRequest } from "../requestBuilder/withServerRequest";
import requests from "./requests";

const serverRequests = {
  getRating: withServerRequest(requests.getRating),
};

export default serverRequests;
