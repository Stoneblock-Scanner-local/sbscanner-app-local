import React from "react";
import { useField } from "formik";
import { Button } from "@/components/Basic/Button";

export interface Props {
  name: string;
  successMessage: string;
  onRemove: () => void;
}

const FileAccepted = ({ name, successMessage, onRemove }: Props) => {
  const [{ value }] = useField(name);

  return (
    <div className="flex items-center">
      <span className="text-lg">{successMessage}</span>
      <div className="ml-auto flex items-center gap-x-4">
        <span className="font-medium">{value.name}</span>
        <Button className="h-10" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default FileAccepted;
