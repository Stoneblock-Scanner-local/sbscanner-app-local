import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  className?: string;
}

const NoItems = ({ text, className }: Props) => {
  return (
    <div className={twMerge("text-2xl mx-auto mt-20 font-semibold", className)}>
      {text}
    </div>
  );
};

export default NoItems;
