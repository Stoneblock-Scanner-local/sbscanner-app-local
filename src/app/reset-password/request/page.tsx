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

const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
});

const ResetPasswordRequestPage = () => {
  const [formError, setFormError] = useState("");

  const { mutateAsync: sendResetPasswordEmail } = useMutation({
    mutationFn: (email: string) => resetPasswordApi.resetPasswordRequest(email),
    onError: (err: Error) => {
      setFormError(err.message);
    },
    onSuccess: () => toast.success("Check your email"),
  });

  const handleSubmit = async (
    values: { email: string },
    { resetForm }: any,
  ) => {
    setFormError("");
    await sendResetPasswordEmail(values.email);
    resetForm();
  };

  return (
    <PageContentWrapper className="flex flex-col items-center gap-y-10 pt-36">
      <span className="max-w-80 flex flex-col items-center gap-y-4">
        <h1 className="text-4xl font-semibold">Reset password</h1>
        <span className="text-center">
          Please enter the e-mail address you used to register on this website.
          We will send you an email with instructions to reset your password.
        </span>
      </span>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full max-w-80">
            <FormInput
              type="text"
              label="E-mail address"
              name="email"
              alignCenter
              placeholder="Enter email address"
            />

            {formError && (
              <span className="text-red text-sm block text-center">
                {formError}
              </span>
            )}
            <Button
              type="submit"
              className="mx-auto w-32 mt-8"
              disabled={isSubmitting}
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </PageContentWrapper>
  );
};

export default ResetPasswordRequestPage;
