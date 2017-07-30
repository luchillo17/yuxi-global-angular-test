import { Action } from '@ngrx/store';

import { TeamChallenge } from '..';

export const ADD_TEAM_CHALLENGE = '[TeamChallenge] Add';
export const ADD_TEAM_CHALLENGES = '[TeamChallenge] AddAll';
export const LOAD_TEAM_CHALLENGES = '[TeamChallenge] LoadAll';
export const LOAD_TEAM_CHALLENGES_SUCCESS = '[TeamChallenge] LoadAllSuccess';
export const LOAD_TEAM_CHALLENGES_FAILURE = '[TeamChallenge] LoadAllFailure';
export const UPDATE_TEAM_CHALLENGE = '[TeamChallenge] Update';

export class AddTeamChallengeAction implements Action {
  public readonly type = ADD_TEAM_CHALLENGE;
  constructor(public payload: TeamChallenge) {}
}

export class AddTeamChallengesAction implements Action {
  public readonly type = ADD_TEAM_CHALLENGES;
  constructor(public payload: TeamChallenge[]) {}
}

export class LoadTeamChallengesAction implements Action {
  public readonly type = LOAD_TEAM_CHALLENGES;
  constructor(public payload: TeamChallenge[]) {}
}

export class LoadTeamChallengesSuccessAction implements Action {
  public readonly type = LOAD_TEAM_CHALLENGES_SUCCESS;
  constructor(public payload: TeamChallenge[]) {}
}

// TODO: Understand &\|| use error payload
export class LoadTeamChallengesFailureAction implements Action {
  public readonly type = LOAD_TEAM_CHALLENGES_FAILURE;
  constructor(public payload: any) {}
}

export class UpdateTeamChallengeAction implements Action {
  public readonly type = UPDATE_TEAM_CHALLENGE;
  constructor(public payload: TeamChallenge) {}
}
