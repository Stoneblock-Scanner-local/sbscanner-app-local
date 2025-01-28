"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import styles from "./Menu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuItem {
  label: string;
  link: string;
}

export interface Props {
  menu: MenuItem[];
  className?: string;
}

const Menu = ({ menu, className }: Props) => {
  const path = usePathname();

  return (
    <div
      className={twMerge(
        "flex justify-between mx-auto w-full max-w-2xl overflow-x-scroll",
        styles.scrollbar_hide,
        className,
      )}
    >
      {menu.map((item, ix) => {
        return (
          <Link
            key={ix}
            href={item.link}
            className={twMerge(
              "text-lg whitespace-nowrap relative p-5 flex flex-col items-center",
              path === item.link
                ? "text-primary font-bold border-b-4 border-primary"
                : " text-grey-300",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
