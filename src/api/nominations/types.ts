import { ApprovalStage } from "@/shared/types";
import { Categories, CategoriesDto } from "@/shared/constants";
import { User } from "../users/types";

interface NominationBase {
  id: string;
  title: string;
  name: string;
  creator: User;
  website: string;
  description: string;
  approvalStage: ApprovalStage;
  rating?: number;
  socialX?: string;
  socialInstagram?: string;
  socialDiscord?: string;
  otherInfo?: string;
}

export interface Nomination extends NominationBase {
  categories: CategoriesDto[];
}

export interface NominationForm extends NominationBase {
  categories: Categories[];
}
