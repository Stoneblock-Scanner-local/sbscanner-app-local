import { publicConfig } from "@/shared/config/constants";
import { RequestBuilder } from "../requestBuilder/requestBuilder";
import queryString from "query-string";

const getNominationViewsCount =
  (request: RequestBuilder<number>) => async (nominationId: string) => {
    return await request.call(`${publicConfig.apiUrl}/views/${nominationId}`);
  };

const setNominationView =
  (request: RequestBuilder<any>) => async (nominationId: string) => {
    return request.call(
      `${publicConfig.apiUrl}/views/${nominationId}`,
      (init) => ({
        ...init,
        method: "POST",
      }),
    );
  };

const getNominationsViewsBulkCount =
  (request: RequestBuilder<{ [key: string]: number }>) =>
  async (ids: string[] | string) => {
    const url = queryString.stringifyUrl({
      url: `${publicConfig.apiUrl}/views/nomination/bulk-count`,
      query: {
        ids,
      },
    });

    return request.call(url);
  };

const requests = {
  getNominationViewsCount,
  setNominationView,
  getNominationsViewsBulkCount,
};

export default requests;
