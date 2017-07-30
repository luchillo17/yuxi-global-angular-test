import { Component } from '@angular/core';
import { Store } from '@ngrx/store/src';

import { AppState } from '.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public store: Store<AppState>,
  ) {
    this.store.select('teamChallenges')
      .subscribe((teamChallenges) => console.log(teamChallenges));
  }
}
