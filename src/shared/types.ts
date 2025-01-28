export interface ProjectNominateForm {
  title: string;
  name: string;
  description: string;
  website: string;
  categoryDefi?: boolean;
  categoryDeveloperTooling?: boolean;
  categoryGaming?: boolean;
  categoryInfrastructure?: boolean;
  categoryNft?: boolean;
  categorySocial?: boolean;
  categoryOther?: boolean;
  socialX?: string;
  socialInstagram?: string;
  socialDiscord?: string;
  otherInfo?: string;
}

export interface ProjectAuditForm extends Omit<ProjectNominateForm, "title"> {
  contactName: string;
  socialEmail: string;
  socialTelegram?: string;
  presentationSrc: string;
  founderDescription: string;
}

export type ProjectAuditFormClient = Omit<
  ProjectAuditForm,
  "presentationSrc"
> & {
  presentation: File | null;
};

export enum ApprovalStage {
  PENDING = "PENDING",
  VOTE_APPROVED = "VOTE_APPROVED",
  RATE_APPROVED = "RATE_APPROVED",
}

export enum StarType {
  BLUE = "BLUE",
  GOLD = "GOLD",
}
