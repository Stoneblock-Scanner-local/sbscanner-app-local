import { publicConfig } from "@/shared/config/constants";
import { RequestBuilder } from "../requestBuilder/requestBuilder";
import queryString from "query-string";
import { Nomination, NominationForm } from "./types";
import { ApprovalStage } from "@/shared/types";
import { Categories } from "@/shared/constants";

const createNomination =
  (request: RequestBuilder<NominationForm>) =>
  async (nomination: Partial<NominationForm>) => {
    const url = `${publicConfig.apiUrl}/nominations`;

    return request.call(url, (init) => ({
      ...init,
      headers: {
        ...init.headers,
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(nomination),
    }));
  };

const getNominations =
  (request: RequestBuilder<Nomination[]>) =>
  async (
    skip: number,
    take: number,
    stage: ApprovalStage,
    category?: Categories,
    searchTerm?: string,
  ) => {
    const query = {
      skip,
      take,
      stage,
      category,
      searchTerm,
    };

    const url = queryString.stringifyUrl({
      url: `${publicConfig.apiUrl}/nominations`,
      query,
    });

    return request.call(url);
  };

const getSingleNomination =
  (request: RequestBuilder<Nomination>) => async (id: string) => {
    return request.call(`${publicConfig.apiUrl}/nominations/${id}`);
  };

const requests = {
  createNomination,
  getNominations,
  getSingleNomination,
};

export default requests;
