import { withServerRequest } from "../requestBuilder/withServerRequest";
import requests from "./requests";

const serverRequests = {
  getNominations: withServerRequest(requests.getNominations),
  getSingleNomination: withServerRequest(requests.getSingleNomination),
};

export default serverRequests;
