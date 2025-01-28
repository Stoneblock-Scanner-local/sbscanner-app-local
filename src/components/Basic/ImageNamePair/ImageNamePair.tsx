import { User } from "@/api/users/types";
import Image from "next/image";
import DefaultAvatarIcon from "@/assets/icons/default-avatar.svg";
import { twMerge } from "tailwind-merge";

export interface Props {
  user: User;
  className?: string;
  labelClassName?: string;
  isBig?: boolean;
}

const ImageNamePair = ({ user, className, labelClassName, isBig }: Props) => {
  return (
    <div className={twMerge("flex items-center gap-x-1", className)}>
      {user.imageSrc ? (
        <Image
          src={user.imageSrc}
          alt={user.displayName || "Anonymous"}
          width={isBig ? 40 : 24}
          height={isBig ? 40 : 24}
          className="rounded-full"
        />
      ) : (
        <DefaultAvatarIcon className={isBig ? "w-10 h-10" : "w-6 h-6"} />
      )}
      <span
        className={twMerge(
          "text-xs leading-5 font-semibold text-grey-400 dark:text-grey-200 whitespace-nowrap",
          labelClassName,
        )}
      >
        {user.displayName || "Anonymous"}
      </span>
    </div>
  );
};

export default ImageNamePair;
