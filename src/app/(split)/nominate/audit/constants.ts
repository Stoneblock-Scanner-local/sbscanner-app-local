import { ProjectAuditFormClient } from "@/shared/types";
import * as Yup from "yup";

export const validationSchema = Yup.object({
  contactName: Yup.string()
    .max(30, "Must be less than 30 characters")
    .required("Contact name is required"),
  socialEmail: Yup.string().email().required("Email is required"),
  name: Yup.string()
    .max(30, "Must be less than 30 characters")
    .required("Project name is required"),
  description: Yup.string()
    .max(500, "Must be less than 500 characters")
    .required("Description is required"),
  presentation: Yup.mixed().required("Presentation is required"),
  founderDescription: Yup.string()
    .max(500, "Must be less than 500 characters")
    .required("Founder description is required"),
  website: Yup.string()
    .url("Please enter a valid website URL")
    .required("Project webiste is required"),
  socialX: Yup.string()
    .url("Please enter a valid x URL")
    .nullable()
    .required("X account is required"),
  socialInstagram: Yup.string()
    .url("Please enter a valid instagram URL")
    .nullable()
    .required("Instagram account is required"),
  socialDiscord: Yup.string()
    .url("Please enter a valid discord URL")
    .nullable()
    .required("Discord account is required"),
});

export const initialValues: ProjectAuditFormClient = {
  contactName: "",
  socialEmail: "",
  socialTelegram: "",
  name: "",
  description: "",
  presentation: null,
  founderDescription: "",
  categoryDefi: false,
  categoryDeveloperTooling: false,
  categoryGaming: false,
  categoryInfrastructure: false,
  categoryNft: false,
  categorySocial: false,
  categoryOther: false,
  website: "",
  socialX: "",
  socialInstagram: "",
  socialDiscord: "",
  otherInfo: undefined,
};
