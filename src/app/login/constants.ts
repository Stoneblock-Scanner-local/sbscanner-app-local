import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  password: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
});
