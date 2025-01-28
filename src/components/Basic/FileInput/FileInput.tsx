"use client";

import { twMerge } from "tailwind-merge";
import { useField } from "formik";
import { useEffect, useState } from "react";
import { FileAccepted } from "@/components/Application/UploadData/FileAccepted";
import { UploadFile } from "@/components/Application/UploadData/UploadFile";

export interface Props {
  label?: string;
  name: string;
  placeholder: string;
  maxFileSize: number;
}

const FileInput = ({ label, name, placeholder, maxFileSize }: Props) => {
  const [{ value: file }, { error, touched }, { setValue }] = useField(name);

  const [isAccepted, setIsAccepted] = useState(false);

  const isError = touched && !!error;

  useEffect(() => {
    if (!file) return;
    setIsAccepted(true);
  }, [file, name]);

  return (
    <div className={twMerge("relative w-full flex flex-col gap-y-2")}>
      {label && (
        <span>
          <label
            className={twMerge(
              "font-bold text-[15px] text-grey-400 dark:text-grey-200",
            )}
          >
            {label}
          </label>
        </span>
      )}
      <div
        className={twMerge(
          "relative w-full border-2 border-grey-100 dark:border-grey-300 rounded-lg p-3",
          isError && "border-red",
        )}
      >
        {isAccepted ? (
          <FileAccepted
            name={name}
            successMessage="Your presentation is uploaded successfully!"
            onRemove={() => {
              setValue(null);
              setIsAccepted(false);
            }}
          />
        ) : (
          <div className="flex items-center">
            <span className="text-grey-300">{placeholder}</span>
            <UploadFile
              name={name}
              buttonLabel="Attach"
              maxFileSize={maxFileSize}
              className="ml-auto h-10"
            />
          </div>
        )}
      </div>
      <span className="text-red text-xs py-1">{isError && error}</span>
    </div>
  );
};

export default FileInput;
