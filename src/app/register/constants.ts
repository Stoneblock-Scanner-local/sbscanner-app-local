import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  username: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  password: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password does not match")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  acceptedTermsAndConditions: Yup.boolean()
    .isTrue(
      "Please indicate that you have read and agree to the Terms and Conditions",
    )
    .required("Required"),
});
