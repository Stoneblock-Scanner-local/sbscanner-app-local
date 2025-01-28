import { ClientRequestBuilder } from "./clientRequestBuilder";
import { RequestBuilder } from "./requestBuilder";

export const withAuthenticatedClientRequest = <TArgs extends unknown[], T>(
  callback: (request: RequestBuilder<T>) => (...args: TArgs) => Promise<T>,
): ((...args: TArgs) => Promise<T>) => {
  return async (...args: TArgs) => {
    const request = new ClientRequestBuilder<T>();
    request.authenticate();
    return await callback(request)(...args);
  };
};

export const withClientRequest = <TArgs extends unknown[], T>(
  callback: (request: RequestBuilder<T>) => (...args: TArgs) => Promise<T>,
): ((...args: TArgs) => Promise<T>) => {
  return async (...args: TArgs) => {
    const request = new ClientRequestBuilder<T>();
    return await callback(request)(...args);
  };
};
