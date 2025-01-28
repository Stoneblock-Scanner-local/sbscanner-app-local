import React from "react";
import AuditProjectForm from "@/components/Application/Projects/AuditProjectForm/AuditProjectForm";

export const metadata = {
  title: "Project audit nomination",
};

const NominateAuditPage = () => {
  return (
    <div className="pb-32">
      <h1 className="text-4xl font-semibold pt-12 pb-16">
        Welcome to project audit from SBScanner
      </h1>
      <AuditProjectForm />
      <span></span>
    </div>
  );
};

export default NominateAuditPage;
