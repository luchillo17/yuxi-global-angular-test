import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { values } from 'lodash';

import {
  AppState,
  UserChallenge,
  getUserChallenges,
} from '../../..';

@Component({
  selector: 'app-user-challenges',
  templateUrl: './user-challenges.component.html',
  styleUrls: ['./user-challenges.component.scss']
})
export class UserChallengesComponent implements OnInit {

  public userChallenges$: Observable<UserChallenge[]>;

  constructor(
    public store: Store<AppState>,
  ) {
    this.userChallenges$ = this.store
      .select(getUserChallenges)
      .map(values);
  }

  ngOnInit() {
  }

}
