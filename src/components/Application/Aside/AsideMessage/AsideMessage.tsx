"use client";

import { Button } from "@/components/Basic/Button";
import EmpthyStarIcon from "@/assets/icons/empty-star.svg";
import { ReactNode, useState } from "react";
import CloseIcon from "@/assets/icons/close.svg";
import { Variant } from "@/components/Basic/Button/constants";
import { twMerge } from "tailwind-merge";

export interface Props {
  children: ReactNode;
  buttonLabel?: string;
  title?: string;
  className?: string;
}

const AsideMessage = ({ buttonLabel, children, title, className }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className={twMerge(
        "rounded overflow-hidden bg-[#F0F9FF] p-6 max-w-[300px] w-full",
        className,
      )}
    >
      <div className="flex items-center">
        {title && <div className="leading-6 font-semibold">{title}</div>}
        <CloseIcon
          className="w-6 cursor-pointer stroke-primary ml-auto"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="flex flex-col">
        {children}
        {buttonLabel && (
          <Button
            variant={Variant.Secondary}
            endIcon={<EmpthyStarIcon className="w-6 stroke-white fill-none" />}
            className="rounded-xl"
          >
            {buttonLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default AsideMessage;
