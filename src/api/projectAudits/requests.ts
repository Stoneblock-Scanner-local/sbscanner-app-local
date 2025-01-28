import { ProjectAuditForm } from "@/shared/types";
import { RequestBuilder } from "../requestBuilder/requestBuilder";
import { publicConfig } from "@/shared/config/constants";

const createProjectAudit =
  (request: RequestBuilder<ProjectAuditForm>) =>
  async (form: Partial<ProjectAuditForm>) => {
    const url = `${publicConfig.apiUrl}/project-audits`;

    return request.call(url, (init) => ({
      ...init,
      headers: {
        ...init.headers,
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form),
    }));
  };

const requests = {
  createProjectAudit,
};

export default requests;
