import React from "react";
import { useField } from "formik";
import Image from "next/image";
import { useState } from "react";
import { UploadFile } from "@/components/Application/UploadData/UploadFile";
import { twMerge } from "tailwind-merge";
import DefaultAvatarIcon from "@/assets/icons/default-avatar.svg";

export interface Props {
  name: string;
  initialUrl?: string;
}

const ImageUpload = ({ name, initialUrl }: Props) => {
  const [, { touched, error }] = useField(name);

  const isError = !!touched && !!error;

  const [localImagePath, setLocalImagePath] = useState(initialUrl);

  return (
    <div className="flex flex-col items-center">
      <div className="flex relative justify-center w-48 h-48 mx-auto">
        {localImagePath ? (
          <Image
            src={localImagePath}
            alt={name}
            fill
            className="rounded-full min-h-48 min-w-48 object-cover"
          />
        ) : (
          <span
            className={twMerge(
              "flex rounded-full justify-center border w-full h-full",
              isError && "border-red",
            )}
          >
            <DefaultAvatarIcon className="w-48" />
          </span>
        )}
        <UploadFile
          name={name}
          maxFileSize={5}
          className="absolute w-full h-full bg-transparent hover:bg-grey-100 rounded-full cursor-pointer"
          setLocalPath={setLocalImagePath}
          buttonLabel={localImagePath ? "Change" : ""}
        />
      </div>
      {isError && <span className="text-red">{error}</span>}
    </div>
  );
};

export default ImageUpload;
