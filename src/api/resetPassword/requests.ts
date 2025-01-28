import { publicConfig } from "@/shared/config/constants";
import { RequestBuilder } from "../requestBuilder/requestBuilder";

const requestResetPassword =
  (request: RequestBuilder<any>) => async (email: string) => {
    return request.call(
      `${publicConfig.apiUrl}/reset-password/requestPasswordReset/${email}`,
      (init) => ({
        ...init,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );
  };

const resetPassword =
  (request: RequestBuilder<any>) =>
  async (password: string, confirmedPassword: string, token: string) => {
    return request.call(
      `${publicConfig.apiUrl}/reset-password/${token}`,
      (init) => ({
        ...init,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPassword: password,
          confirmedPassword,
        }),
      }),
    );
  };

const requests = {
  requestResetPassword,
  resetPassword,
};

export default requests;
