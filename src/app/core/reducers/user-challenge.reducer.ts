import {
  Action,
  ActionReducer,
  createSelector,
  ActionReducerFactory,
} from '@ngrx/store';
import { keyBy, reduce } from 'lodash';

import {
  UserChallenge,
  UserChallengeState,
  ADD_USER_CHALLENGE,
  ADD_USER_CHALLENGES,
  UPDATE_USER_CHALLENGE,
  LOAD_USER_CHALLENGES_SUCCESS,
} from '../';
import { AppState } from '../..';

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

export const getUserChallenges = (state: AppState) => state.userChallenges;

export const getUserStatistics = createSelector(getUserChallenges, (userChallenges): UserEntries => {
  const userEntries = reduce(userChallenges, (sum, userChallenge): UserEntries => {
    if (userChallenge.completedDate !== null) {
      sum.completed += 1;
      sum.score += userChallenge.overallScore;
    } else {
      sum.pending += 1;
    }
    return sum;
  }, {
    completed: 0,
    pending: 0,
    score: 0,
  });
  userEntries.score = Math.round(userEntries.score / Object.keys(userChallenges).length || 1);
  return userEntries;
});
