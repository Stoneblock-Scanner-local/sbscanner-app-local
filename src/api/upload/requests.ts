import { publicConfig } from "@/shared/config/constants";
import { RequestBuilder } from "../requestBuilder/requestBuilder";
import { buildFormData } from "../helpers/client";

const uploadPresentation =
  (request: RequestBuilder<string>) => (file: File) => {
    const url = `${publicConfig.apiUrl}/upload/presentation`;

    const formData = buildFormData(file);

    return request.call(url, (init) => ({
      ...init,
      method: "POST",
      body: formData,
    }));
  };

const uploadProfile = (request: RequestBuilder<string>) => (file: File) => {
  const url = `${publicConfig.apiUrl}/upload/profile`;

  const formData = buildFormData(file);

  return request.call(url, (init) => ({
    ...init,
    method: "POST",
    body: formData,
  }));
};

const requests = {
  uploadPresentation,
  uploadProfile,
};

export default requests;
