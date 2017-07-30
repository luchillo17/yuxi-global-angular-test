export interface TeamChallenge {
  id: number;
  userId: number;
  courseId: number;
  folderId: number;

  name: string;
  userFullName: string;

  createdDate: Date;
  modifiedDate: Date;
  instructions: ChallengeInstructions[];
  numberInvited: number; // Number of people invited to present
  numberOfEntries: number; // Submissions
  numberToReview: number; // Submissions pending to review
  numberReviewed: number;
  averageScore: number;
  reviewerCount: number;
  daysUntilSendReviewerReminder: number;

  includeInLeaderboard: boolean;
  scoreCriteriaEnabled: boolean;
  allowManagersToReview: boolean;
  manualReviewersEnabled: boolean;
  peersMaySubmitFeedback: boolean;
  receiveSubmissionEmail: boolean;
  isUserChallengeReviewer: boolean;
  displayScoresInLeaderboard: boolean;
  enableMultipleRatingCategories: boolean;
  enableAutomaticReviewerReminders: boolean;
  machineScoringEnabledForChallenge: boolean;
  displayMachineScoreToParticipants: boolean;
}

export type TeamChallengeState = ListStateByNumber<TeamChallenge>;
