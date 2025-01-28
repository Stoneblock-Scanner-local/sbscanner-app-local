import {
  withAuthenticatedClientRequest,
  withClientRequest,
} from "../requestBuilder/withClientRequest";
import requests from "./requests";

const clientRequests = {
  createRating: withAuthenticatedClientRequest(requests.createRating),
  getRating: withClientRequest(requests.getRating),
};

export default clientRequests;
