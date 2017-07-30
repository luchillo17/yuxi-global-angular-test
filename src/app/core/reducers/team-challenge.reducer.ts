import {
  Action,
  ActionReducer,
  ActionReducerFactory,
} from '@ngrx/store';
import { keyBy } from 'lodash';

import {
  TeamChallenge,
  TeamChallengeState,
  ADD_TEAM_CHALLENGE,
  ADD_TEAM_CHALLENGES,
  UPDATE_TEAM_CHALLENGE,
  LOAD_TEAM_CHALLENGES_SUCCESS,
} from '../';

export function teamChallengeReducer(state: TeamChallengeState = {}, action: Action): TeamChallengeState {
  let teamChallenge: TeamChallenge;

  switch (action.type) {
    case ADD_TEAM_CHALLENGE:
      teamChallenge = action.payload;
      return {
        ...state,
        [teamChallenge.id]: teamChallenge,
      };

    case ADD_TEAM_CHALLENGES:
    case LOAD_TEAM_CHALLENGES_SUCCESS:
      const teamChallenges: TeamChallenge[] = action.payload;
      return Object.assign({}, state, keyBy(teamChallenges, 'id'));

    case UPDATE_TEAM_CHALLENGE:
      teamChallenge = action.payload;
      return {
        ...state,
        [teamChallenge.id]: {
          ...state[teamChallenge.id],
          ...teamChallenge
        },
      };

    default:
      return state;
  }
}
