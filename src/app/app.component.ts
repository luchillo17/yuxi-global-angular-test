import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  AppState,
  TeamChallengeService,
  LoadTeamChallengesAction,
  LoadUserChallengesAction,
} from '.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private store: Store<AppState>,
  ) {
    this.store.dispatch(new LoadTeamChallengesAction);
    this.store.dispatch(new LoadUserChallengesAction);
  }
}
