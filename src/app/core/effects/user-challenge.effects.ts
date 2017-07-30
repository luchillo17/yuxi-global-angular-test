import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import {
  UserChallengeService,
  LOAD_TEAM_CHALLENGES,
  LoadUserChallengesSuccessAction,
  LoadUserChallengesFailureAction,
} from '..';

@Injectable()
export class UserChallengeEffects {
  @Effect()
  userChallenges$ = this.actions
    .ofType(LOAD_TEAM_CHALLENGES)
    .debounceTime(300)
    .map(toPayload)
    .switchMap(() => {
      return this.userChallengeService
        .getUserChallenges()
        .map(userChallenges => new LoadUserChallengesSuccessAction(userChallenges))
        .catch((err) => of(new LoadUserChallengesFailureAction(err)));
    });

  constructor(
    private actions: Actions,
    private userChallengeService: UserChallengeService
  ) {}
}
