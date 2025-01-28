"use client";

import React from "react";
import Link from "next/link";
import { PageContentWrapper } from "@/components/Layout/Wrappers/PageContentWrapper";
import { Button } from "@/components/Basic/Button";

const ErrorPage = () => {
  return (
    <PageContentWrapper className="flex flex-col items-center mt-40">
      <span className="text-3xl font-semibold">
        Sorry, something went wrong.
      </span>
      <Button className="mt-10">
        <Link href="/">Return to home</Link>
      </Button>
    </PageContentWrapper>
  );
};

export default ErrorPage;
