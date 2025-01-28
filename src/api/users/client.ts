import request from "./requests";
import {
  withAuthenticatedClientRequest,
  withClientRequest,
} from "../requestBuilder/withClientRequest";

const clientRequests = {
  getMe: withAuthenticatedClientRequest(request.getMe),
  updateProfile: withAuthenticatedClientRequest(request.updateProfile),
  verifyEmail: withClientRequest(request.verifyEmail),
};

export default clientRequests;
