import { RequestBuilder } from "./requestBuilder";

export class ClientRequestBuilder<T> extends RequestBuilder<T> {
  constructor(url?: string, requestInit?: RequestInit) {
    super(url, requestInit);
  }

  public async authenticate() {
    this.requestInit = {
      ...this.requestInit,
      credentials: "include",
    };

    return this;
  }
}
