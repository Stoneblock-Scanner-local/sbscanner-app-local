"use client";
import { FormCheckbox } from "@/components/Basic/FormCheckbox";
import { FormInput } from "@/components/Basic/FormInput";
import { FormTextarea } from "@/components/Basic/FormTextarea";
import { Button } from "@/components/Basic/Button";
import { FormContainer } from "@/components/Basic/FormContainer";
import { Formik, Form } from "formik";
import {
  initialValues,
  validationSchema,
} from "@/app/(split)/nominate/community/constants";
import { useMutation } from "@tanstack/react-query";
import nominationsApi from "@/api/nominations/client";
import { NominationForm } from "@/api/nominations/types";
import { toast } from "react-toastify";
import { ProjectNominateForm } from "@/shared/types";
import { transformCategoriesToArray } from "@/shared/helpers";

const NominateProjectForm = () => {
  const handleSubmit = async (values: ProjectNominateForm) => {
    const form = transformCategoriesToArray(values);
    await createNominationMutation.mutateAsync(form);
  };

  const createNominationMutation = useMutation({
    mutationFn: (nomination: Partial<NominationForm>) =>
      nominationsApi.createNomination(nomination),
    onError: (err: Error) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success("Submitted successfully");
    },
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, dirty }) => (
        <Form>
          <FormInput
            name="title"
            label="Post title"
            placeholder="Enter a title of your post"
          />
          <FormInput
            name="name"
            label="Name"
            placeholder="What is the name of the project?"
          />
          <FormInput
            name="website"
            label="Project website"
            placeholder="Please share the project website link"
          />
          <FormTextarea
            name="description"
            label="Reason for nomination"
            placeholder="Why are you nominating this particular project"
            maxLength={500}
          />
          <FormContainer
            title="Project category"
            className="py-2 items-start"
            description="Select all that apply"
          >
            <FormCheckbox
              inputName="categoryDefi"
              label="DeFi"
              name="categoryDefi"
            />
            <FormCheckbox
              inputName="categoryDeveloperTooling"
              label="Developer Tooling"
              name="categoryDeveloperTooling"
            />
            <FormCheckbox
              inputName="categoryGaming"
              label="Gaming"
              name="categoryGaming"
            />
            <FormCheckbox
              inputName="categoryInfrastructure"
              label="Infrastructure"
              name="categoryInfrastructure"
            />
            <FormCheckbox
              inputName="categoryNft"
              label="NFT"
              name="categoryNft"
            />
            <FormCheckbox
              inputName="categorySocial"
              label="Social"
              name="categorySocial"
            />
            <FormCheckbox
              inputName="categoryOther"
              label="Other"
              name="categoryOther"
            />
          </FormContainer>
          <FormInput
            name="socialX"
            label="X account"
            placeholder="Please share the X account link of your project"
            isOptional
          />
          <FormInput
            name="socialInstagram"
            label="Instagram account"
            placeholder="Please share the Instagram account link of your project"
            isOptional
          />
          <FormInput
            name="socialDiscord"
            label="Discord account"
            placeholder="Please share the Discord account link of your project"
            isOptional
          />
          <FormTextarea
            label="Other comments and information"
            name="otherInfo"
            placeholder="Other information about the project or your nomination"
            maxLength={500}
            isOptional
          />
          <Button type="submit" disabled={!dirty}>
            {isSubmitting ? "Submitting" : "Nominate a project"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default NominateProjectForm;
