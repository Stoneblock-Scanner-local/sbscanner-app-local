import { publicConfig } from "@/shared/config/constants";
import { User } from "./types";
import { RequestBuilder } from "../requestBuilder/requestBuilder";

const getMe = (request: RequestBuilder<User | null>) => async () => {
  try {
    return await request.call(`${publicConfig.apiUrl}/users/me`);
  } catch {
    return null;
  }
};

const updateProfile =
  (request: RequestBuilder<User>) => async (user: Partial<User>) => {
    return await request.call(
      `${publicConfig.apiUrl}/users/update-profile`,
      (init) => ({
        ...init,
        method: "PATCH",
        headers: {
          ...init.headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }),
    );
  };

const verifyEmail =
  (request: RequestBuilder<any>) => async (verificationToken: string) => {
    return await request.call(
      `${publicConfig.apiUrl}/users/verify-email/${verificationToken}`,
      (init) => ({ ...init, method: "PUT" }),
    );
  };

const requests = {
  getMe,
  updateProfile,
  verifyEmail,
};

export default requests;
