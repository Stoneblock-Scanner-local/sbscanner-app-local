import request from "./requests";
import { withAuthenticatedServerRequest } from "../requestBuilder/withServerRequest";

const serverRequests = {
  getMe: withAuthenticatedServerRequest(request.getMe),
};

export default serverRequests;
