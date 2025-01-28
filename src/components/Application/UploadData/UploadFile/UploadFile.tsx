import { ChangeEvent, useRef } from "react";
import { Button } from "@/components/Basic/Button";
import { useField } from "formik";
import { validateFile } from "../helpers";

export interface Props {
  name: string;
  maxFileSize: number;
  buttonLabel?: string;
  className?: string;
  setLocalPath?: (localPath: string) => void;
}

const UploadFile = ({
  name,
  buttonLabel,
  maxFileSize,
  className,
  setLocalPath,
}: Props) => {
  const [, , { setValue, setError }] = useField(name);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const isFileValid = validateFile({ file, maxFileSize, setError });

    if (!isFileValid) return;

    if (!file) return;

    setValue(file);
    setLocalPath && setLocalPath(URL.createObjectURL(file));
  };

  return (
    <Button
      onClick={() => inputRef.current?.click()}
      className={className}
      type="button"
    >
      <input
        type="file"
        className="hidden"
        onChange={handleOnChange}
        ref={inputRef}
      />
      {buttonLabel}
    </Button>
  );
};

export default UploadFile;
