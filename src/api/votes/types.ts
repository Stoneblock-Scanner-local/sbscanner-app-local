export interface DynamicCount {
  [key: string]: Vote;
}

export interface Vote {
  upVotes: number;
  downVotes: number;
}

export enum VoteValue {
  UP = "UP",
  DOWN = "DOWN",
}

export interface NominationVote {
  id: string;
  vote: VoteValue;
  createdAt: string;
  updatedAt: string;
  nominationId: string;
  voterId: string;
}
