import { useField } from "formik";
import { FieldHookConfig } from "formik";
import { ChangeEventHandler, ReactElement } from "react";
import { Input } from "../Input";
import { twMerge } from "tailwind-merge";

export interface Props {
  type?: string;
  label?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  startIcon?: ReactElement;
  className?: string;
  isOptional?: boolean;
  alignCenter?: boolean;
}

const FormInput = ({
  type = "text",
  label,
  placeholder,
  onChange,
  startIcon,
  className,
  isOptional,
  alignCenter,
  ...props
}: Props & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const isError = !!meta.touched && !!meta.error;

  return (
    <Input
      type={type}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      startIcon={startIcon}
      className={twMerge("py-3 px-4", className)}
      field={field}
      isError={isError}
      errorMsg={meta.error}
      isOptional={isOptional}
      alignCenter={alignCenter}
    />
  );
};

export default FormInput;
