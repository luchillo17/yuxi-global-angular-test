import {
  Action,
  ActionReducer,
  ActionReducerFactory,
} from '@ngrx/store';

import { TeamChallengeState } from '../';

export function teamChallengeReducer(state: TeamChallengeState = {}, action: Action): TeamChallengeState {
  switch (action.type) {

    default:
      return state;
  }
}
