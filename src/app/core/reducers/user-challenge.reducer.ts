import {
  Action,
  ActionReducer,
  ActionReducerFactory,
} from '@ngrx/store';
import { keyBy } from 'lodash';

import {
  UserChallenge,
  UserChallengeState,
  ADD_USER_CHALLENGE,
  ADD_USER_CHALLENGES,
  UPDATE_USER_CHALLENGE,
  LOAD_USER_CHALLENGES_SUCCESS,
} from '../';

export function userChallengeReducer(state: UserChallengeState = {}, action: Action): UserChallengeState {
  let userChallenge: UserChallenge;

  switch (action.type) {
    case ADD_USER_CHALLENGE:
      userChallenge = action.payload;
      return {
        ...state,
        [userChallenge.id]: userChallenge,
      };

    case ADD_USER_CHALLENGES:
    case LOAD_USER_CHALLENGES_SUCCESS:
      const userChallenges: UserChallenge[] = action.payload;
      return Object.assign({}, state, keyBy(userChallenges, 'id'));

    case UPDATE_USER_CHALLENGE:
      userChallenge = action.payload;
      return {
        ...state,
        [userChallenge.id]: {
          ...state[userChallenge.id],
          ...userChallenge
        },
      };

    default:
      return state;
  }
}
