import { RequestBuilder } from "./requestBuilder";
import { getSessionCoookie } from "../helpers/server";
import { publicConfig } from "@/shared/config/constants";

export class ServerRequestBuilder<T> extends RequestBuilder<T> {
  constructor(url?: string, requestInit?: RequestInit) {
    super(url, requestInit);
  }

  public authenticate() {
    const cookie = getSessionCoookie();

    this.requestInit = {
      ...this.requestInit,
      headers: {
        ...this.requestInit?.headers,
        Cookie: `${publicConfig.session_cookie_name}=${cookie}`,
      },
    };

    return this;
  }
}
