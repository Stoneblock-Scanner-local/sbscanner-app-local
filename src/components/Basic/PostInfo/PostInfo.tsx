"use client";

import CommentsIcon from "@/assets/icons/comments.svg";
import ViewsIcon from "@/assets/icons/views.svg";
import { formatStats } from "@/shared/utilities";
import useCommentsCount from "@/components/Application/Projects/Comments/hooks/useCommentsCount";
import { useQuery } from "@tanstack/react-query";
import viewsApi from "@/api/views/client";

export interface Props {
  nominationId: string;
}

const PostInfo = ({ nominationId }: Props) => {
  const commentsCount = useCommentsCount(nominationId);

  const { data: viewsCount } = useQuery({
    queryKey: ["views-nomination-count", nominationId],
    queryFn: () => viewsApi.getNominationViewsCount(nominationId),
  });

  return (
    <div className="flex items-center gap-x-4 shrink-0">
      <div className="flex items-center gap-x-1">
        <ViewsIcon className="w-3" />
        <span className="text-xs leading-5 font-extralight">
          {formatStats(viewsCount)}
        </span>
      </div>
      <div className="flex items-center gap-x-1">
        <CommentsIcon className="w-3" />
        <span className="text-xs leading-5 font-extralight">
          {formatStats(commentsCount)}
        </span>
      </div>
    </div>
  );
};

export default PostInfo;
