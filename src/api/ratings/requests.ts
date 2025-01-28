import { publicConfig } from "@/shared/config/constants";
import { RequestBuilder } from "../requestBuilder/requestBuilder";
import { NominationRating } from "./types";

const createRating =
  (request: RequestBuilder<NominationRating>) =>
  async (nominationId: string, rating: number) => {
    const url = `${publicConfig.apiUrl}/ratings/nomination/${nominationId}`;

    return request.call(url, (init) => ({
      ...init,
      headers: {
        ...init.headers,
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ rating }),
    }));
  };

const getRating =
  (request: RequestBuilder<number>) => async (nominationId: string) => {
    const url = `${publicConfig.apiUrl}/ratings/nomination/${nominationId}`;

    return request.call(url);
  };

const requests = {
  createRating,
  getRating,
};

export default requests;
