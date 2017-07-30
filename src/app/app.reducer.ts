import { compose } from '@ngrx/store';
import {
  TeamChallengeState,
  UserChallengeState,
  teamChallengeReducer,
  userChallengeReducer,
} from '.';

export interface AppState {
  teamChallenges: TeamChallengeState;
  userChallenges: UserChallengeState;
}

export const AppReducers = {
  teamChallenges: teamChallengeReducer,
  userChallenges: userChallengeReducer,
};
