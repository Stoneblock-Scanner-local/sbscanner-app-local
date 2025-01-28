import { RequestBuilder } from "@/api/requestBuilder/requestBuilder";
import { publicConfig } from "@/shared/config/constants";
import queryString from "query-string";
import { DynamicCount, VoteValue, Vote } from "../types";

const getNominationVotesBulkCount =
  (request: RequestBuilder<DynamicCount>) => async (ids: string[] | string) => {
    const url = queryString.stringifyUrl({
      url: `${publicConfig.apiUrl}/votes/nomination/bulk-count`,
      query: {
        ids,
      },
    });

    return request.call(url);
  };

const toggleNominationVote =
  (request: RequestBuilder<void>) =>
  async (nominationId: string, voteValue: VoteValue) => {
    return request.call(
      `${publicConfig.apiUrl}/votes/nomination/${nominationId}`,
      (init) => ({
        ...init,
        method: "POST",
        headers: {
          ...init.headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          voteValue: voteValue,
        }),
      }),
    );
  };

const getNominationVoteCount =
  (request: RequestBuilder<Vote>) => async (nominationId: string) => {
    return request.call(
      `${publicConfig.apiUrl}/votes/nomination/count/${nominationId}`,
    );
  };

const requests = {
  getNominationVotesBulkCount,
  getNominationVoteCount,
  toggleNominationVote,
};

export default requests;
