import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface Props {
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

const FormContainer = ({ title, description, className, children }: Props) => {
  return (
    <div className="flex flex-col mb-4">
      <span className="text-[15px] font-bold text-grey-400 dark:text-grey-200">
        {title}
      </span>
      {description && (
        <span className="text-xs text-grey-200 dark:text-grey-300">
          {description}
        </span>
      )}
      <div className={twMerge("flex flex-col gap-y-4", className)}>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
