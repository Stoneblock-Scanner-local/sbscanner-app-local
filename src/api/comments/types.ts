import { User } from "../users/types";

export interface Comment {
  id: string;
  text: string;
  createdAt: Date;
  author: User;
  numberOfChildren: number;
  deleted: boolean;
  repliedToNominationId: string;
  repliedToCommentId?: string;
  replies?: Comment[];
}

export interface CommentsCount {
  [key: string]: number;
}
