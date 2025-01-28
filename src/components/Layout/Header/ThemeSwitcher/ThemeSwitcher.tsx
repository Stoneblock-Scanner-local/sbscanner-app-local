"use client";

import { Switch } from "@headlessui/react";
import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Themes } from "@/shared/constants";

export interface Props {
  className?: string;
}

const ThemeSwitcher = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === Themes.DARK;

  return (
    <div className={twMerge("flex items-center gap-x-2", className)}>
      <Switch
        checked={isDark}
        onChange={() => setTheme(isDark ? Themes.LIGHT : Themes.DARK)}
        className={
          "bg-white relative inline-flex h-[36px] w-[72px] shrink-0 cursor-pointer rounded-full border-transparent transition-colors duration-200 ease-in-out"
        }
      >
        <SunIcon
          className={
            "absolute w-6 h-6 right-[7px] top-1/2 -translate-y-1/2 stroke-grey-900"
          }
        />
        <MoonIcon
          className={
            "absolute w-6 h-6 left-[6px] top-1/2 -translate-y-1/2 stroke-black"
          }
        />
        <span
          aria-hidden="true"
          className={
            "relative left-[5px] top-[5px] translate-x-0 dark:translate-x-[36px] pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-secondary transition duration-200 ease-in-out"
          }
        />
      </Switch>
    </div>
  );
};

export default ThemeSwitcher;
