import { Textarea } from "../Textarea";
import { useField, FieldHookConfig } from "formik";

export interface Props {
  label?: string;
  maxLength?: number;
  placeholder?: string;
  className?: string;
  isOptional?: boolean;
}

const FormTextarea = ({
  label,
  maxLength,
  placeholder,
  className,
  isOptional,
  ...props
}: Props & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const isError = !!meta.touched && !!meta.error;

  return (
    <Textarea
      label={label}
      maxLength={maxLength}
      placeholder={placeholder}
      className={className}
      isError={isError}
      errorMsg={meta.error}
      field={field}
      isOptional={isOptional}
    />
  );
};

export default FormTextarea;
