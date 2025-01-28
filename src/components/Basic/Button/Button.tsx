"use client";

import { MouseEventHandler, ReactElement, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Variant } from "./constants";

export interface Props {
  children: React.ReactNode;
  variant?: Variant;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button = ({
  startIcon,
  endIcon,
  className,
  disabled,
  onClick,
  variant = Variant.Primary,
  children,
  type,
}: Props) => {
  return (
    <button
      onClick={(e) => onClick?.(e)}
      className={twMerge(
        "text-white rounded-md px-4 py-3 flex items-center justify-center gap-x-2",
        variant === Variant.Primary
          ? "bg-grey-900 font-bold text-md"
          : "bg-blue",
        className,
      )}
      disabled={disabled}
      type={type}
    >
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
