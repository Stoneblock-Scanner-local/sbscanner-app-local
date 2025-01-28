import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface Props {
  children: ReactNode;
  className?: string;
}

const PageContentWrapper = ({ children, className }: Props) => {
  return (
    <div className={twMerge("w-full max-w-[1800px] mx-auto px-2 lg:px-10", className)}>
      {children}
    </div>
  );
};

export default PageContentWrapper;
