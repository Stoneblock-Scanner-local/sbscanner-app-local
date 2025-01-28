import { ReactNode } from "react";
import { Checkbox } from "../Checkbox";
import { useField, FieldHookConfig } from "formik";

export interface Props {
  inputName: string;
  label?: string;
  children?: ReactNode;
}

const FormCheckbox = ({
  inputName,
  label,
  children,
  ...props
}: Props & FieldHookConfig<boolean>) => {
  const [field, meta, helpers] = useField(props);

  const isError = !!meta.touched && !!meta.error;

  const handleChange = () => {
    helpers.setValue(!field.value);
  };

  return (
    <Checkbox
      inputName={inputName}
      value={field.value}
      label={label}
      isError={isError}
      errorMsg={meta.error}
      handleChange={handleChange}
      /* eslint-disable react/no-children-prop */
      children={children}
      {...props}
    />
  );
};

export default FormCheckbox;
