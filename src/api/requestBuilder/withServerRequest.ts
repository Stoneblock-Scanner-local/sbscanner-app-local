import { ServerRequestBuilder } from "./serverRequestBuilder";
import { RequestBuilder } from "./requestBuilder";

export const withAuthenticatedServerRequest = <TArgs extends unknown[], T>(
  callback: (request: RequestBuilder<T>) => (...args: TArgs) => Promise<T>,
): ((...args: TArgs) => Promise<T>) => {
  return async (...args: TArgs) => {
    const request = new ServerRequestBuilder<T>();
    request.authenticate();
    return await callback(request)(...args);
  };
};

export const withServerRequest = <TArgs extends unknown[], T>(
  callback: (request: RequestBuilder<T>) => (...args: TArgs) => Promise<T>,
): ((...args: TArgs) => Promise<T>) => {
  return async (...args: TArgs) => {
    const request = new ServerRequestBuilder<T>();
    return await callback(request)(...args);
  };
};
