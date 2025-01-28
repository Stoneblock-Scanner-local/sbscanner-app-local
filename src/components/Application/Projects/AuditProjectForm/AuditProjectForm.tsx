"use client";
import { FormCheckbox } from "@/components/Basic/FormCheckbox";
import { FormInput } from "@/components/Basic/FormInput";
import { FormTextarea } from "@/components/Basic/FormTextarea";
import { Button } from "@/components/Basic/Button";
import { FormContainer } from "@/components/Basic/FormContainer";
import { Formik, Form } from "formik";
import { FileInput } from "@/components/Basic/FileInput";
import {
  initialValues,
  validationSchema,
} from "@/app/(split)/nominate/audit/constants";
import { ProjectAuditForm, ProjectAuditFormClient } from "@/shared/types";
import { useMutation } from "@tanstack/react-query";
import projectAuditsApi from "@/api/projectAudits/client";
import uploadApi from "@/api/upload/client";
import { toast } from "react-toastify";
import { transformCategoriesToArray } from "@/shared/helpers";

const AuditProjectForm = () => {
  const handleSubmit = async (values: ProjectAuditFormClient) => {
    const presentationSrc = await uploadPresentationMutation.mutateAsync(
      values.presentation!,
    );
    const form = {
      ...transformCategoriesToArray(values),
      presentationSrc,
    };
    await createNominationMutation.mutateAsync(form);
  };

  const uploadPresentationMutation = useMutation({
    mutationFn: (file: File) => uploadApi.uploadPresentation(file),
    onSuccess: () => {
      console.log("File uploaded successfully");
    },
    onError: (err: Error) => {
      console.error(err.message);
    },
  });

  const createNominationMutation = useMutation({
    mutationFn: (form: Partial<ProjectAuditForm>) =>
      projectAuditsApi.createProjectAudit(form),
    onError: (err: Error) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success("Submitted successfully");
    },
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, dirty }) => (
        <Form>
          <FormInput
            name="contactName"
            label="Contact name"
            placeholder="Name or pseudonym of your primary contact"
          />
          <FormInput
            type="email"
            name="socialEmail"
            label="Email Address"
            placeholder="Please share the email address of the primary contact for your project"
          />
          <FormTextarea
            name="socialTelegram"
            label="Telegram Handle"
            className="min-h-[70px] resize-none"
            placeholder={
              "Please share the Telegram account handle (eg. @mantlenetwork) of the primary contact for your project whom we can contact in case of need for additional information"
            }
            isOptional
          />
          <FormInput
            name="name"
            label="Project name"
            placeholder="What is the name of your project?"
          />
          <FormTextarea
            name="description"
            label="Project description"
            placeholder="What does your product/project do? (elevator pitch / short summary)"
            maxLength={500}
          />
          <FileInput
            name="presentation"
            label="Pitch deck"
            placeholder="Please attach the presentation about your project with all relevant information"
            maxFileSize={20}
          />
          <FormTextarea
            name="founderDescription"
            label="Founder description"
            placeholder="Please provide a brief description of your founders/team"
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
            name="website"
            label="Project website"
            placeholder="Please share the project website link"
          />
          <FormInput
            name="socialX"
            label="X account"
            placeholder="Please share the X account link of your project"
          />
          <FormInput
            name="socialInstagram"
            label="Instagram account"
            placeholder="Please share the Instagram account link of your project"
          />
          <FormInput
            name="socialDiscord"
            label="Discord account"
            placeholder="Please share the Discord account link of your project"
          />
          <FormTextarea
            label="Other comments and information"
            name="otherInfo"
            placeholder="Other information about the project or your nomination"
            maxLength={500}
            isOptional
          />
          <Button type="submit" disabled={isSubmitting || !dirty}>
            {isSubmitting ? "Submitting" : "Submit for SBScanner audit"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuditProjectForm;
