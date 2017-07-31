import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';

import { AppState, getUserStatistics } from '../../../';

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.scss']
})
export class UserStatisticsComponent implements OnInit {
  public userEntries$: Observable<ChartValue[]>;
  public score = 0;

  // Chart config
  // public view = [150, 150];
  public colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor(
    public store: Store<AppState>,
  ) {
    this.userEntries$ = this.store
      .select(getUserStatistics)
      .map(userEntries => {
        this.score = userEntries.score;
        return [
          {
            name: 'Completed entries',
            value: userEntries.completed,
          },
          {
            name: 'Pending entries',
            value: userEntries.pending,
          },
        ];
      });
  }

  ngOnInit() {
  }

}
