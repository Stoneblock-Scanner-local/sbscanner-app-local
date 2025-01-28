"use client";

import resetPasswordApi from "@/api/resetPassword/client";
import { PageContentWrapper } from "@/components/Layout/Wrappers/PageContentWrapper";
import { FormInput } from "@/components/Basic/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "@/components/Basic/Button";
import { toast } from "react-toastify";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

interface FormProps {
  password: string;
  confirmedPassword: string;
}

const validationSchema = Yup.object({
  password: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password does not match")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
});

const ResetPasswordPage = ({ searchParams }: Props) => {
  const [formError, setFormError] = useState("");

  const { token } = searchParams;

  const { mutateAsync: sendResetPasswordEmail } = useMutation({
    mutationFn: ({ password, confirmedPassword }: FormProps) =>
      resetPasswordApi.resetPassword(password, confirmedPassword, token!),
    onError: (err: Error) => {
      setFormError(err.message);
    },
    onSuccess: () => toast.success("Password reseted successfully"),
  });

  const handleSubmit = async (
    { password, confirmedPassword }: FormProps,
    { resetForm }: any,
  ) => {
    setFormError("");
    await sendResetPasswordEmail({
      password,
      confirmedPassword,
    });
    resetForm();
  };

  return (
    <PageContentWrapper className="flex flex-col items-center gap-y-10 pt-36">
      <span className="max-w-80 flex flex-col items-center gap-y-4">
        <h1 className="text-4xl font-semibold">Reset password</h1>
      </span>
      <Formik
        initialValues={{
          password: "",
          confirmedPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full max-w-80">
          <FormInput
            type="password"
            label="Choose your password"
            name="password"
            alignCenter
            placeholder="New password"
          />
          <FormInput
            type="password"
            label="Repeat password"
            name="confirmedPassword"
            alignCenter
            placeholder="Confirm password"
          />

          {formError && (
            <span className="text-red text-sm block text-center">
              {formError}
            </span>
          )}
          <Button type="submit" className="mx-auto w-32 mt-8">
            Reset
          </Button>
        </Form>
      </Formik>
    </PageContentWrapper>
  );
};

export default ResetPasswordPage;
