"use client";

import BookmarkIcon from "@/assets/icons/bookmark.svg";
import useBookmark from "@/components/Application/Projects/hooks/useBookmark";
import useMe from "@/shared/hooks/useMe";
import { twMerge } from "tailwind-merge";

export interface Props {
  nominationId: string;
  type?: "small" | "big";
}

const Bookmark = ({ nominationId, type = "small" }: Props) => {
  const { me: user } = useMe();
  const { toggleNomination, isSavedByMe } = useBookmark({ nominationId, user });

  return (
    <button
      className="active:scale-95 ease-in-out duration-200"
      disabled={!user}
      onClick={() => toggleNomination()}
    >
      <BookmarkIcon
        className={twMerge(
          "stroke-grey-300 dark:stroke-grey-200",
          type === "small" ? "w-4" : "w-6",
          isSavedByMe && "fill-primary stroke-primary",
        )}
      />
    </button>
  );
};

export default Bookmark;
