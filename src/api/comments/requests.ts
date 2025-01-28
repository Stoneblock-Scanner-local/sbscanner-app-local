import { publicConfig } from "@/shared/config/constants";
import { RequestBuilder } from "../requestBuilder/requestBuilder";
import { Comment, CommentsCount } from "./types";
import queryString from "query-string";

const createNominationComment =
  (request: RequestBuilder<Comment>) =>
  async (
    text: string,
    authorId: string,
    repliedToNominationId: string,
    repliedToCommentId?: string,
  ) => {
    return request.call(
      `${publicConfig.apiUrl}/comments/nomination`,
      (init) => ({
        ...init,
        method: "POST",
        headers: {
          ...init.headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          authorId,
          repliedToNominationId,
          repliedToCommentId,
        }),
      }),
    );
  };

const getNominationComments =
  (request: RequestBuilder<Comment[]>) =>
  async (skip: number, take: number, nominationId: string) => {
    const query = {
      skip,
      take,
    };

    const url = queryString.stringifyUrl({
      url: `${publicConfig.apiUrl}/comments/nomination/${nominationId}`,
      query,
    });

    return request.call(url);
  };

const deleteNominationComment =
  (request: RequestBuilder<Comment>) => async (commentId: string) => {
    return request.call(
      `${publicConfig.apiUrl}/comments/nomination/${commentId}`,
      (init) => ({
        ...init,
        method: "DELETE",
      }),
    );
  };

const getNominationsCommentsBulkCount =
  (request: RequestBuilder<CommentsCount>) =>
  async (ids: string[] | string) => {
    const url = queryString.stringifyUrl({
      url: `${publicConfig.apiUrl}/comments/nomination/bulk-count`,
      query: {
        ids,
      },
    });

    return request.call(url);
  };

const getNominationCommentsCount =
  (request: RequestBuilder<number>) => async (nominationId: string) => {
    return request.call(
      `${publicConfig.apiUrl}/comments/nomination/count/${nominationId}`,
    );
  };

const requests = {
  createNominationComment,
  getNominationComments,
  deleteNominationComment,
  getNominationsCommentsBulkCount,
  getNominationCommentsCount,
};

export default requests;
