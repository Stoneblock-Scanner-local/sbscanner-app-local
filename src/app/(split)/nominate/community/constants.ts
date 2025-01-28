import { ProjectNominateForm } from "@/shared/types";
import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string()
    .max(30, "Must be less than 30 characters")
    .required("Post title is required"),
  name: Yup.string()
    .max(30, "Must be less than 30 characters")
    .required("Project name is required"),
  website: Yup.string()
    .url("Please enter a valid website URL")
    .required("Project webiste is required"),
  description: Yup.string()
    .max(500, "Must be less than 500 characters")
    .required("Description is required"),
  socialX: Yup.string().url("Please enter a valid x URL").nullable(),
  socialInstagram: Yup.string()
    .url("Please enter a valid instagram URL")
    .nullable(),
  socialDiscord: Yup.string()
    .url("Please enter a valid discord URL")
    .nullable(),
  otherInfo: Yup.string().max(500, "Must be less than 500 characters"),
});

export const initialValues: ProjectNominateForm = {
  title: "",
  name: "",
  website: "",
  description: "",
  categoryDefi: false,
  categoryDeveloperTooling: false,
  categoryGaming: false,
  categoryInfrastructure: false,
  categoryNft: false,
  categorySocial: false,
  categoryOther: false,
  socialX: undefined,
  socialInstagram: undefined,
  socialDiscord: undefined,
  otherInfo: undefined,
};
