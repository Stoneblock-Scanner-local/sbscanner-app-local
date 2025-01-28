import { DEFAULT_PAGE_SIZE } from "@/shared/constants";
import { publicConfig } from "@/shared/config/constants";
import { RequestBuilder } from "../requestBuilder/requestBuilder";
import { Nomination } from "../nominations/types";
import queryString from "query-string";

const toggleNomination =
  (request: RequestBuilder<any>) => async (nominationId: string) => {
    const url = `${publicConfig.apiUrl}/saved-nominations/${nominationId}`;

    return request.call(url, (init) => ({
      ...init,
      method: "POST",
    }));
  };

const getSavedNominations =
  (request: RequestBuilder<Nomination[]>) =>
  async (skip = 0, take = DEFAULT_PAGE_SIZE, searchTerm: string) => {
    const url = queryString.stringifyUrl({
      url: `${publicConfig.apiUrl}/saved-nominations`,
      query: { skip, take, searchTerm },
    });

    return request.call(url);
  };

const requests = {
  toggleNomination,
  getSavedNominations,
};

export default requests;
