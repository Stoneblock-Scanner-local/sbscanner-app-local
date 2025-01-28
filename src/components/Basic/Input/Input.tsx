import { twMerge } from "tailwind-merge";
import { ChangeEventHandler, InputHTMLAttributes, ReactElement } from "react";
import { FieldInputProps } from "formik";

export interface Props {
  type?: string;
  label?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  startIcon?: ReactElement;
  className?: string;
  field?: FieldInputProps<string>;
  isError?: boolean;
  errorMsg?: string;
  isOptional?: boolean;
  alignCenter?: boolean;
}

const Input = ({
  type,
  label,
  placeholder,
  onChange,
  startIcon,
  className,
  field,
  isError,
  errorMsg,
  isOptional,
  alignCenter,
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  const value = field
    ? field.value !== null && field.value !== undefined
      ? field.value
      : ""
    : props.value || "";

  return (
    <div
      className={twMerge(
        "relative w-full flex flex-col gap-y-2",
        alignCenter && "items-center",
      )}
    >
      {label && (
        <span
          className={twMerge(
            "flex gap-x-1 text-[15px] leading-6 font-bold",
            isError ? "text-red" : "text-grey-400 dark:text-grey-200",
          )}
        >
          <label htmlFor={props.id || props.name}>{label}</label>
          {isOptional && <span className="font-normal">{"(optional)"}</span>}
        </span>
      )}
      <div className="flex items-center relative w-full">
        <input
          className={twMerge(
            "py-3 px-4 outline-none border-2 border-grey-100 dark:border-grey-300 rounded-lg h-[48px] bg-primary w-full",
            isError && "border-red",
            className,
            startIcon && "pl-10",
            alignCenter && "text-center",
          )}
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e)}
          value={value}
          {...props}
          {...field}
        />
        {startIcon && (
          <span className="absolute left-3 w-5 h-5 stroke-primary top-1/2 -translate-y-1/2">
            {startIcon}
          </span>
        )}
      </div>
      {/* Ako input nije u formi, nego search npr onda nemamo error */}
      {field && (
        <span className="text-red text-xs py-1">{isError ? errorMsg : ""}</span>
      )}
    </div>
  );
};

export default Input;
