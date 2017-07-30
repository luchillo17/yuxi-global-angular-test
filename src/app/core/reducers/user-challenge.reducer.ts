import {
  Action,
  ActionReducer,
  ActionReducerFactory,
} from '@ngrx/store';

import { UserChallengeState } from '../';

export function userChallengeReducer(state: UserChallengeState = {}, action: Action): UserChallengeState {
  switch (action.type) {

    default:
      return state;
  }
}
