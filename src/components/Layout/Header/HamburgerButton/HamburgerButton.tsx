import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

export interface Props {
  isOpen: boolean;
  onClick: MouseEventHandler;
}

const HamburgerButton = ({ onClick, isOpen }: Props) => {
  return (
    <button onClick={onClick} className="w-[22px] relative">
      <div
        className={twMerge("w-full h-[3px] bg-white rounded-sm", isOpen && "absolute rotate-45")}
      ></div>
      <div
        className={twMerge("w-full h-[3px] bg-white my-[5px] rounded-sm", isOpen && "hidden")}
      ></div>
      <div
        className={twMerge("w-full h-[3px] bg-white rounded-sm", isOpen && "absolute -rotate-45")}
      ></div>
    </button>
  );
};

export default HamburgerButton;
