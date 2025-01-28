"use client";

import { Button } from "@/components/Basic/Button";
import SBLogo from "@/assets/images/sb-logo.png";
import Image from "next/image";
import Link from "next/link";
import { AvatarDropdown } from "../AvatarDropdown";
import { Variant } from "@/components/Basic/Button/constants";
import { HamburgerButton } from "../HamburgerButton";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import useMe from "@/shared/hooks/useMe";
import { Search } from "../Search";
import { useRouter } from "next/navigation";
import { ThemeSwitcher } from "../ThemeSwitcher";

const HeaderContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { me } = useMe();
  const router = useRouter();

  const onHomeClick = () => {
    router.push("/");
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      <div className="fixed lg:absolute right-8 top-4 z-30">
        <div className="flex gap-x-4 items-center">
          <ThemeSwitcher />
          {me ? (
            <AvatarDropdown user={me} />
          ) : (
            <Link href={"/login"}>
              <Button
                variant={Variant.Secondary}
                className="rounded-3xl tracking-wider"
              >
                CONNECT
              </Button>
            </Link>
          )}
        </div>
      </div>
      {/** MOBILE CONTENT */}
      <div
        className={twMerge(
          "z-20 lg:hidden fixed w-full h-20 bg-secondary flex justify-between items-center px-8 py-3",
        )}
      >
        <HamburgerButton
          isOpen={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>

      <div
        className={twMerge(
          "fixed top-20 z-20 lg:static w-full h-[calc(100%-80px)] bg-secondary px-8 py-3",
          isExpanded ? "" : "translate-x-full lg:translate-x-0",
        )}
      >
        <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-x-3 gap-y-24 mb-64 lg:mb-0 lg:w-[500px] lg:max-w-none">
          <button
            className="relative inline flex-shrink-0"
            onClick={onHomeClick}
          >
            <Image src={SBLogo.src} alt="logo" width={60} height={60} />
          </button>
          <div className="w-11/12 max-w-sm">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
