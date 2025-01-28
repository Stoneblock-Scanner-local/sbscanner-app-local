import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface Props {
  label?: string;
  children?: ReactNode;
  className?: string;
}

const ProjectDetailsItem = ({ label, children, className }: Props) => {
  return (
    <div
      className={twMerge(
        "flex items-start justify-between border-b dark:border-grey-400 py-4 gap-x-14",
        className,
      )}
    >
      <span className="text-xl font-bold text-grey-300 dark:text-grey-300 dark:text-200 shrink-0 grow-0 whitespace-nowrap">
        {label}
      </span>
      <span className="text-lg text-right text-grey-400 dark:text-grey-200 font-semibold text-ellipsis overflow-hidden line-clamp-6 mr-2">
        {children}
      </span>
    </div>
  );
};

export default ProjectDetailsItem;
