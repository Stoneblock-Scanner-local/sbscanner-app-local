"use client";

import Image from "next/image";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import ArrowRightIcon from "@/assets/icons/arrow-right-thick.svg";
import DefaultAvatarIcon from "@/assets/icons/default-avatar.svg";
import { User } from "@/api/users/types";
import { useMutation } from "@tanstack/react-query";
import authApi from "@/api/auth/client";
import { useRouter } from "next/navigation";

export interface Props {
  user: User;
}

const AvatarDropdown = ({ user }: Props) => {
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: authApi.signOut,
    onError: (err: Error) => {
      console.error(err);
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  const actions = [
    {
      id: 1,
      href: "/settings",
      label: "Account Settings",
    },
    {
      id: 2,
      href: "/saved/nominations",
      label: "Saved",
    },
    {
      id: 3,
      label: "Logout",
      onClick: async () => await signOutMutation.mutateAsync(),
    },
  ];

  return (
    <div className="flex z-50">
      <Menu>
        <Menu.Button className={""}>
          <div className="w-12 h-12 rounded-full relative overflow-hidden">
            {user.imageSrc ? (
              <Image
                src={user.imageSrc}
                alt="profile image"
                fill
                className="object-contain"
              />
            ) : (
              <DefaultAvatarIcon />
            )}
          </div>
        </Menu.Button>
        <Menu.Items className="absolute right-0 top-16 z-50">
          <div className="bg-primary flex flex-col gap-y-1 items-center border-2 border-solid border-black rounded-2xl p-5 text-md w-full pt-3">
            <span className="text-grey-300">
              {user.displayName || "Anonymous"}
            </span>
            {actions.map((action) => {
              return (
                <Menu.Item key={action.id}>
                  {action.onClick ? (
                    <button
                      className="w-full p-2 hover:bg-grey-100 hover:dark:bg-grey-400 hover:cursor-pointer rounded-md flex justify-between"
                      onClick={() => action.onClick()}
                    >
                      <span className="whitespace-nowrap">{action.label}</span>
                      <ArrowRightIcon className="stroke-grey-300 w-5 ml-6" />
                    </button>
                  ) : (
                    <Link
                      className="w-full p-2 hover:bg-grey-100 hover:dark:bg-grey-400 hover:cursor-pointer rounded-md flex justify-between"
                      href={action.href}
                      key={action.id}
                    >
                      <span className="whitespace-nowrap">{action.label}</span>
                      <ArrowRightIcon className="stroke-grey-300 w-5 ml-6" />
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default AvatarDropdown;
