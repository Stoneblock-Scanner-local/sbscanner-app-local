import { withServerRequest } from "../requestBuilder/withServerRequest";
import requests from "./requests";

const serverRequests = {
  getNews: withServerRequest(requests.getNews),
};

export default serverRequests;
