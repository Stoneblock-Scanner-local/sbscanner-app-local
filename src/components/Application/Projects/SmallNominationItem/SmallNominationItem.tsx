import { Nomination } from "@/api/nominations/types";
import { ImageNamePair } from "@/components/Basic/ImageNamePair";
import { PostInfo } from "@/components/Basic/PostInfo";
import Link from "next/link";
import { Bookmark } from "@/components/Basic/Bookmark";

const SmallNominationItem = ({ id, title, creator }: Nomination) => {
  return (
    <div className="p-3 flex flex-col w-full">
      <Link
        href={`/nomination/${id}`}
        className="font-semibold leading-7 text-primary pb-8 text-ellipsis overflow-hidden whitespace-nowrap"
      >
        {title}
      </Link>
      <div className="flex items-center justify-between">
        <PostInfo nominationId={id} />
        <div className="flex items-center gap-x-1">
          <Bookmark nominationId={id} />
          <ImageNamePair user={creator} />
        </div>
      </div>
    </div>
  );
};

export default SmallNominationItem;
