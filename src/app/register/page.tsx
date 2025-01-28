"use client";

import { PageContentWrapper } from "@/components/Layout/Wrappers/PageContentWrapper";
import { FormInput } from "@/components/Basic/FormInput";
import { Formik, Form } from "formik";
import { Button } from "@/components/Basic/Button";
import Link from "next/link";
import { validationSchema } from "./constants";
import { FormCheckbox } from "@/components/Basic/FormCheckbox";
import authApi from "@/api/auth/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

// TODO: validations are not consistent in backend and here
const RegisterPage = () => {
  const [formError, setFormError] = useState("");

  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    acceptedTermsAndConditions: false,
  };

  const signUpMutation = useMutation({
    mutationFn: (values: any) =>
      authApi.signUp({
        email: values.email,
        username: values.username,
        password: values.password,
        repeatPassword: values.confirmPassword,
        acceptedTermsAndConditions: values.acceptedTermsAndConditions,
      }),
    onError: (err: Error) => {
      setFormError(err.message);
    },
    onSuccess: () => {
      toast.success(
        "Account created, check your inbox for email verification.",
      );
    },
  });

  const handleSubmit = async (
    values: any,
    { resetForm }: { resetForm: () => void },
  ) => {
    setFormError("");
    await signUpMutation.mutateAsync(values);
    resetForm();
  };

  return (
    <PageContentWrapper className="flex flex-col items-center gap-y-10 pt-14">
      <span className="text-4xl font-semibold">Sign up</span>
      <span className="opacity-70 text-lg max-w-[400px] text-center">
        Welcome to SBScanner, to register enter email and pick a password.
      </span>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full max-w-80">
          <FormInput
            type="text"
            label="E-mail address"
            name="email"
            alignCenter
            placeholder="Enter email address"
          />
          <FormInput
            type="text"
            label="Username"
            name="username"
            alignCenter
            placeholder="Enter username"
          />
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
            name="confirmPassword"
            alignCenter
            placeholder="Confirm password"
          />
          <FormCheckbox
            name="acceptedTermsAndConditions"
            label="I have read and I accept"
            inputName="acceptedTermsAndConditions"
          >
            <Link href="/terms-and-conditions" className="font-medium">
              {" "}
              Terms and Conditions
            </Link>
          </FormCheckbox>
          {formError && (
            <span className="text-red block text-center text-sm">
              {formError}
            </span>
          )}
          <Button type="submit" className="mx-auto w-40 mt-8">
            Register
          </Button>
        </Form>
      </Formik>
      <span className="opacity-70">
        Already have account?
        <Link href="/login" className="underline ml-1 font-bold">
          Log in
        </Link>
      </span>
    </PageContentWrapper>
  );
};

export default RegisterPage;
