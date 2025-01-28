import CheckboxIcon from "@/assets/icons/checkbox.svg";
import { twMerge } from "tailwind-merge";
import { FieldInputProps } from "formik";
import { ReactNode } from "react";

export interface Props {
  inputName: string;
  value: boolean;
  handleChange: () => void;
  field?: FieldInputProps<boolean>;
  errorMsg?: string;
  isError?: boolean;
  label?: string;
  children?: ReactNode;
}

const Checkbox = ({
  inputName,
  label,
  value,
  errorMsg,
  isError,
  handleChange,
  children,
}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <span className="flex items-center">
        <input
          type="checkbox"
          name={inputName}
          id={inputName}
          checked={value}
          onChange={handleChange}
          className="appearance-none"
        />
        <CheckboxIcon
          onClick={handleChange}
          className={twMerge(
            "w-5 rounded-[5px] cursor-pointer",
            value
              ? " stroke-white fill-blue"
              : "fill-none stroke-none border-[1px] border-[#D9D9D9]",
          )}
        />
        <label htmlFor={inputName} className="ml-2 text-sm">
          {label}
          {children}
        </label>
      </span>
      <span className="text-red text-xs py-1 text-center">{isError ? errorMsg : ""}</span>
    </div>
  );
};

export default Checkbox;
