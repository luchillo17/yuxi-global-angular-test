import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IPageChangeEvent,
  ITdDataTableColumn,
  TdDataTableService,
  TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent,
} from '@covalent/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { values } from 'lodash';

import {
  AppState,
  UserChallenge,
  getUserChallenges,
  getUserStatistics,
  UpdateUserChallengeAction,
} from '../../..';

@Component({
  selector: 'app-user-challenges',
  templateUrl: './user-challenges.component.html',
  styleUrls: [ './user-challenges.component.scss' ]
})
export class UserChallengesComponent implements OnInit {
  public userEntries$: Observable<UserEntries>;

  public userChallenges$: Subscription;

  // Table config
  public data = [];
  public columns: ITdDataTableColumn[] = [
    { name: 'challengeName', label: 'Title', tooltip: 'Title from name property on UserChallenge' },
    { name: 'createdBy', label: 'Created By', tooltip: 'Created By from userFullName property on UserChallenge' },
    { name: 'overallScore', label: 'Avg. Score', tooltip: '' },
    { name: 'modifiedDate', label: 'Invited', tooltip: 'Invited from numberInvited property on UserChallenge' },
    { name: 'completedDate', label: 'Completed', tooltip: 'Completed from numberInvited property on UserChallenge' },
  ];

  public filteredData: any[] = this.data;
  public filteredTotal: number = this.data.length;

  public searchTerm = '';
  public fromRow = 1;
  public pageSize = 5;
  public currentPage = 1;
  public sortBy = 'challengeName';
  public sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(
    public store: Store<AppState>,
    private dataTableService: TdDataTableService,
  ) {
    this.userEntries$ = this.store
      .select(getUserStatistics);

    this.userChallenges$ = this.store
      .select(getUserChallenges)
      .map(values)
      .subscribe(userChallenges => {
        this.data = userChallenges;
        this.filter();
      });
  }

  ngOnInit() {
  }

  completeChallenge(challenge: UserChallenge) {
    this.store.dispatch(new UpdateUserChallengeAction({
      ...challenge,
      completedDate: new Date(),
    }));
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    const excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.name;
      });
    newData = this.dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this.dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this.dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }

}
