import {
  AddTeamChallengeAction,
  AddTeamChallengesAction,
  UpdateTeamChallengeAction,
} from './team-challenge.actions';

import {
  AddUserChallengeAction,
  AddUserChallengesAction,
  UpdateUserChallengeAction,
} from './user-challenge.actions';

export * from './team-challenge.actions';
export * from './user-challenge.actions';

export type Actions =
  AddTeamChallengeAction |
  AddTeamChallengesAction |
  UpdateTeamChallengeAction |
  AddUserChallengeAction |
  AddUserChallengesAction |
  UpdateUserChallengeAction;
