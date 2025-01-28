import { publicConfig } from "@/shared/config/constants";
import { RequestBuilder } from "../requestBuilder/requestBuilder";
import queryString from "query-string";
import { News } from "./types";

const getNews =
  (request: RequestBuilder<News[]>) => async (skip: number, take: number) => {
    const query = {
      skip,
      take,
    };

    const url = queryString.stringifyUrl({
      url: `${publicConfig.apiUrl}/news`,
      query,
    });

    return request.call(url);
  };

const requests = {
  getNews,
};

export default requests;
