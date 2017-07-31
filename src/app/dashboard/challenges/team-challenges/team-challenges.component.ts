import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { values } from 'lodash';

import {
  AppState,
  TeamChallenge,
  getTeamChallenges,
} from '../../..';

@Component({
  selector: 'app-team-challenges',
  templateUrl: './team-challenges.component.html',
  styleUrls: ['./team-challenges.component.scss']
})
export class TeamChallengesComponent implements OnInit {

  public teamChallenges$: Observable<TeamChallenge[]>;

  constructor(
    public store: Store<AppState>,
  ) {
    this.teamChallenges$ = this.store
      .select(getTeamChallenges)
      .map(values);
  }

  ngOnInit() {
  }

}
