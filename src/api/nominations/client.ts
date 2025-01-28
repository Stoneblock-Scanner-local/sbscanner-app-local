import requests from "./requests";
import {
  withAuthenticatedClientRequest,
  withClientRequest,
} from "../requestBuilder/withClientRequest";

const clientRequests = {
  createNomination: withAuthenticatedClientRequest(requests.createNomination),
  getNominations: withClientRequest(requests.getNominations),
};

export default clientRequests;
