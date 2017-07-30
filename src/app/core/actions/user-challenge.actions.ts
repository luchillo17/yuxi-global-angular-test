import { Action } from '@ngrx/store';

import { UserChallenge } from '..';

export const ADD_USER_CHALLENGE = '[UserChallenge] Add';
export const ADD_USER_CHALLENGES = '[UserChallenge] AddAll';
export const LOAD_USER_CHALLENGES = '[UserChallenge] LoadAll';
export const LOAD_USER_CHALLENGES_SUCCESS = '[UserChallenge] LoadAllSuccess';
export const LOAD_USER_CHALLENGES_FAILURE = '[UserChallenge] LoadAllFailure';
export const UPDATE_USER_CHALLENGE = '[UserChallenge] Update';

export class AddUserChallengeAction implements Action {
  public readonly type = ADD_USER_CHALLENGE;
  constructor(public userChallenge: UserChallenge) {}
}

export class AddUserChallengesAction implements Action {
  public readonly type = ADD_USER_CHALLENGES;
  constructor(public userChallenges: UserChallenge[]) {}
}

export class LoadUserChallengesAction implements Action {
  public readonly type = LOAD_USER_CHALLENGES;
  constructor() {}
}

export class LoadUserChallengesSuccessAction implements Action {
  public readonly type = LOAD_USER_CHALLENGES_SUCCESS;
  constructor(public payload: UserChallenge[]) {}
}

// TODO: Understand &\|| use error payload
export class LoadUserChallengesFailureAction implements Action {
  public readonly type = LOAD_USER_CHALLENGES_FAILURE;
  constructor(public payload: any) {}
}

export class UpdateUserChallengeAction implements Action {
  public readonly type = UPDATE_USER_CHALLENGE;
  constructor(public userChallenge: UserChallenge) {}
}
