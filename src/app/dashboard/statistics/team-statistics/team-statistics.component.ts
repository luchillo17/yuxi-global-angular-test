import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';

import { AppState, getTeamStatistics } from '../../../';

@Component({
  selector: 'app-team-statistics',
  templateUrl: './team-statistics.component.html',
  styleUrls: ['./team-statistics.component.scss']
})
export class TeamStatisticsComponent implements OnInit {
  public teamEntries$: Observable<ChartValue[]>;
  public colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor(
    public store: Store<AppState>,
  ) {
    this.teamEntries$ = this.store
      .select(getTeamStatistics)
      .map((teamEntries) => {
        return [
          {
            name: 'Completed entries',
            value: teamEntries.completed,
          },
          {
            name: 'Pending entries',
            value: teamEntries.pending,
          },
        ];
      })
      .startWith([]);
  }

  ngOnInit() {
  }

}
