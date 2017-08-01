import { compose, ActionReducerMap } from '@ngrx/store';
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

export const AppReducers: ActionReducerMap<AppState> = {
  teamChallenges: teamChallengeReducer,
  userChallenges: userChallengeReducer,
};
