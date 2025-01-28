import { withClientRequest } from "../requestBuilder/withClientRequest";
import requests from "./requests";

const clientRequests = {
  setNominationView: withClientRequest(requests.setNominationView),
  getNominationViewsCount: withClientRequest(requests.getNominationViewsCount),
};

export default clientRequests;
