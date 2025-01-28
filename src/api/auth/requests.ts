import { publicConfig } from "@/shared/config/constants";
import { RequestBuilder } from "../requestBuilder/requestBuilder";
import { SignUp } from "./types";

const signUp =
  (request: RequestBuilder<any>) =>
  async ({
    email,
    username,
    password,
    repeatPassword,
    acceptedTermsAndConditions,
  }: SignUp) => {
    return request.call(`${publicConfig.apiUrl}/auth/sign-up`, (init) => ({
      ...init,
      method: "POST",
      headers: {
        ...init.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        repeatPassword,
        acceptedTermsAndConditions,
      }),
    }));
  };

const signIn =
  (request: RequestBuilder<any>) => async (email: string, password: string) => {
    return request.call(`${publicConfig.apiUrl}/auth/sign-in`, (init) => ({
      ...init,
      method: "POST",
      headers: {
        ...init.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }));
  };

const signOut = (request: RequestBuilder<any>) => async () => {
  return request.call(`${publicConfig.apiUrl}/auth/sign-out`, (init) => ({
    ...init,
    method: "POST",
    headers: {
      ...init.headers,
      "Content-Type": "application/json",
    },
  }));
};

const requests = {
  signUp,
  signIn,
  signOut,
};

export default requests;
