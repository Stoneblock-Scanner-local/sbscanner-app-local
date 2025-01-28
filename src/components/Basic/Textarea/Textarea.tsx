import { twMerge } from "tailwind-merge";
import { FormEvent, TextareaHTMLAttributes, useState } from "react";
import { FieldInputProps } from "formik";

export interface Props {
  label?: string;
  maxLength?: number;
  placeholder?: string;
  className?: string;
  isError?: boolean;
  errorMsg?: string;
  field?: FieldInputProps<string>;
  isOptional?: boolean;
}

const Textarea = ({
  label,
  maxLength,
  placeholder,
  className,
  isError,
  errorMsg,
  field,
  isOptional,
  ...props
}: Props & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const [charactersTyped, setCharactersTyped] = useState(0);

  const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setCharactersTyped(target.value.length);
  };

  return (
    <div className={twMerge("w-full flex flex-col gap-y-2")}>
      <div
        className={twMerge(
          "flex gap-x-1 text-[15px] leading-6 font-bold",
          isError ? "text-red" : "text-grey-400 dark:text-grey-200",
        )}
      >
        <label htmlFor={props.id || props.name}>{label}</label>
        {isOptional && <span className="font-normal">{"(optional)"}</span>}
      </div>
      <div className="flex items-center relative">
        <textarea
          maxLength={maxLength}
          placeholder={placeholder}
          onInput={(e) => handleChange(e)}
          className={twMerge(
            "py-3 px-4 outline-none border-2 border-grey-100 dark:border-grey-300 rounded-lg bg-primary w-full h-[160px]",
            isError && "border-red",
            className,
          )}
          {...props}
          {...field}
          value={field?.value || ""}
        />
      </div>
      {maxLength && (
        <span className="pl-4 text-sm text-grey-200 dark:text-grey-300">{`Characters left: ${charactersTyped}/${maxLength}`}</span>
      )}
      <span className="text-red text-xs py-1">{isError ? errorMsg : ""}</span>
    </div>
  );
};

export default Textarea;
