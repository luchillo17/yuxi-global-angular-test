export interface UserChallenge {
  id: number;
  courseId: number;
  challengeId: number;
  submissionsPid: number;
  challengeUserId: number;
  recipientUserId: number;
  challengerUserId: number;
  autoLoginTokenId: string;
  recipientManagerId: number;

  challengeName: string;
  challengerLastName: string;
  challengerFirstName: string;
  challengeInstructions: ChallengeInstructions[];
  challengeModifiedDate: Date;
  challengeIncludeInLeaderboard: boolean;
  challengeDisplayScoresInLeaderboard: boolean;
  challengeEnableMultipleRatingCategories: boolean;

  recipientFirstName: string;
  recipientLastName: string;
  state: number;
  rating: number;
  overallScore: number;
  modifiedDate: Date; // Invited
  completedDate: Date; // Completed
  numberOfVersions: number;
  streamHost: string;
  streamMaximumLength: number;
}

export type UserChallengeState = ListStateByNumber<UserChallenge>;
