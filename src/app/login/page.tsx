"use client";

import { PageContentWrapper } from "@/components/Layout/Wrappers/PageContentWrapper";
import { FormInput } from "@/components/Basic/FormInput";
import { Formik, Form } from "formik";
import { Button } from "@/components/Basic/Button";
import Link from "next/link";
import authApi from "@/api/auth/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { validationSchema } from "./constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import usersApi from "@/api/users/client";

const LoginPage = () => {
  const router = useRouter();

  const [formError, setFormError] = useState("");

  const verifyEmailMutation = useMutation({
    mutationFn: (token: string) => usersApi.verifyEmail(token),
    onError: (err: Error) => {
      setFormError(err.message);
    },
    onSuccess: () => {
      console.log("Email verified");
    },
  });

  const params = useSearchParams();
  const verifcationToken = params.get("verificationToken");

  const queryClient = useQueryClient();

  const signInMutation = useMutation({
    mutationFn: (values: any) => authApi.signIn(values.email, values.password),
    onError: (err: Error) => {
      setFormError(err.message);
    },
    onSuccess: () => {
      router.push("/projects/rankings");
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  const handleSubmit = async (values: any) => {
    setFormError("");
    if (verifcationToken) {
      await verifyEmailMutation.mutateAsync(verifcationToken);
    }
    await signInMutation.mutateAsync(values);
  };

  return (
    <PageContentWrapper className="flex flex-col items-center gap-y-10 pt-36">
      <span className="text-4xl font-semibold">Log in</span>
      <span className="opacity-70 text-lg text-center">
        Please enter your e-mail and password.
      </span>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
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
            type="password"
            label="Password"
            name="password"
            alignCenter
            placeholder="Enter password"
          />
          <span>Forgot password?</span>{" "}
          <Link href="/reset-password/request" className="text-blue ml-2">
            Reset here.
          </Link>
          {formError && (
            <span className="text-red text-sm block text-center">
              {formError}
            </span>
          )}
          <Button type="submit" className="mx-auto w-32 mt-8">
            Log in
          </Button>
        </Form>
      </Formik>
      <Link href="/register" className="font-bold underline opacity-70">
        I am new and I want to register
      </Link>
    </PageContentWrapper>
  );
};

export default LoginPage;
