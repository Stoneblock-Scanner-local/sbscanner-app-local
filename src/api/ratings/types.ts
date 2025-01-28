import { Nomination } from "../nominations/types";
import { User } from "../users/types";

export interface NominationRating {
  id: string;
  rate: number;
  createdAt: string;
  nominationId: string;
  Nomination: Nomination;
  raterId: string;
  rater: User;
}
