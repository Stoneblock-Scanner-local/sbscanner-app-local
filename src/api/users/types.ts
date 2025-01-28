import { Nomination } from "../nominations/types";
import { NominationRating } from "../ratings/types";
import { NominationVote } from "../votes/types";

export interface User {
  id: string;
  email: string;
  imageSrc?: string;
  displayName?: string;
  fullName?: string;
  role: Role;
  isEmailVerified: boolean;
  savedNominations: Nomination[];
  nominationVotes: NominationVote[];
  nominationRatings: NominationRating[];
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
