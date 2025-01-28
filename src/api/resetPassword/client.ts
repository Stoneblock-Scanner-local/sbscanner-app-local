import { withClientRequest } from "../requestBuilder/withClientRequest";
import requests from "./requests";

const clientRequests = {
  resetPasswordRequest: withClientRequest(requests.requestResetPassword),
  resetPassword: withClientRequest(requests.resetPassword),
};

export default clientRequests;
