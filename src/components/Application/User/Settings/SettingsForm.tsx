"use client";

import { FormInput } from "@/components/Basic/FormInput";
import { User } from "@/api/users/types";
import { Formik, Form } from "formik";
import { Button } from "@/components/Basic/Button";
import { ImageUpload } from "@/components/Basic/ImageUpload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import usersApi from "@/api/users/client";
import uploadApi from "@/api/upload/client";

export interface Props {
  user: User;
}

const SettingsForm = ({ user }: Props) => {
  const initialValues = {
    displayName: user.displayName || "",
    fullName: user.fullName || "",
    email: user.email || "",
    image: "",
  };

  const queryClient = useQueryClient();

  const { mutateAsync: uploadProfile } = useMutation({
    mutationFn: (file: File) => uploadApi.uploadProfile(file),
    onSuccess: () => {
      console.log("File uploaded successfully");
    },
    onError: (err: Error) => {
      console.error(err.message);
    },
  });

  const { mutateAsync: updateProfile } = useMutation({
    mutationFn: usersApi.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  const onSubmit = async (values: any) => {
    let imageSrc = user.imageSrc;
    if (values.image) {
      imageSrc = await uploadProfile(values.image);
    }

    await updateProfile({
      imageSrc: imageSrc || "",
      email: values.email,
      displayName: values.displayName,
      fullName: values.fullName,
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting, dirty }) => (
        <Form>
          {/* Handle image upload */}
          <ImageUpload name="image" initialUrl={user.imageSrc} />
          <FormInput name="email" label="E-mail" />
          <FormInput name="displayName" label="Username" />
          <FormInput name="fullName" label="Fullname" />
          <Button type="submit" disabled={!dirty}>
            {isSubmitting ? "Submitting" : "Save"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SettingsForm;
