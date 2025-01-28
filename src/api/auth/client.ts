import { withAuthenticatedClientRequest } from "../requestBuilder/withClientRequest";
import requests from "./requests";

const clientRequests = {
  signUp: withAuthenticatedClientRequest(requests.signUp),
  signIn: withAuthenticatedClientRequest(requests.signIn),
  signOut: withAuthenticatedClientRequest(requests.signOut),
};

export default clientRequests;
