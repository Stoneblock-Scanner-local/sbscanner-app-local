import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface Props {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

const AsideSectionWrapper = ({ icon, title, children, className }: Props) => {
  return (
    <div
      className={twMerge(
        "w-full flex flex-col items-center lg:items-start gap-y-6 lg:gap-y-8 py-7 max-w-md lg:max-w-sm border-b-2 border-grey-100 dark:border-grey-300",
        className,
      )}
    >
      <div className="flex items-center gap-x-6 lg:gap-x-3">
        <span className="shrink-0">{icon}</span>
        <h2 className="font-semibold text-2xl leading-9">{title}</h2>
      </div>
      <div className="flex flex-col w-full items-center lg:items-start">
        {children}
      </div>
    </div>
  );
};

export default AsideSectionWrapper;
