import { myFetch } from "../helpers/client";

export abstract class RequestBuilder<T> {
  public url: string;
  public requestInit: RequestInit;

  constructor(url?: string, requestInit?: RequestInit) {
    this.url = url || "";
    this.requestInit = requestInit || {};
  }

  public async call(
    url?: string,
    updateRequestInit?: (init: RequestInit) => RequestInit,
  ): Promise<T> {
    const newUrl = url ? url : this.url;

    const updatedRequestInit = updateRequestInit
      ? updateRequestInit(this.requestInit)
      : this.requestInit;

    const response = await myFetch(newUrl, updatedRequestInit);

    return await response.json();
  }
}
