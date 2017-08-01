import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import {
  TeamChallengeService,
  LOAD_TEAM_CHALLENGES,
  LoadTeamChallengesSuccessAction,
  LoadTeamChallengesFailureAction,
} from '..';

@Injectable()
export class TeamChallengeEffects {
  @Effect()
  teamChallenges$ = this.actions
    .ofType(LOAD_TEAM_CHALLENGES)
    .debounceTime(300)
    .map(toPayload)
    .switchMap(() => {
      return this.teamChallengeService
        .getTeamChallenges()
        .map(teamChallenges => new LoadTeamChallengesSuccessAction(teamChallenges))
        .catch((err) => of(new LoadTeamChallengesFailureAction(err)));
    });

  constructor(
    private actions: Actions,
    private teamChallengeService: TeamChallengeService
  ) {}
}
