import React from "react";
import Image from "next/image";

export interface Props {
  imageSrc: string;
  title: string;
  link: string;
}

const NewsItem = ({ imageSrc, title, link }: Props) => {
  return (
    <div className="mb-5 rounded max-w-[310px] overflow-hidden">
      <a href={link} className="flex flex-col">
        <span className="relative w-full h-[200px]">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </span>
        <div className="text-primary p-3 bg-grey-50 dark:bg-grey-400 w-full">
          {title}
        </div>
      </a>
    </div>
  );
};

export default NewsItem;
