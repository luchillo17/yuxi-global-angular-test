import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  TdDataTableService,
  ITdDataTableColumn,
  TdDataTableSortingOrder,
  ITdDataTableSortChangeEvent,
  IPageChangeEvent,
} from '@covalent/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { values } from 'lodash';

import {
  AppState,
  TeamChallenge,
  getTeamChallenges,
  getUserStatistics,
} from '../../..';

@Component({
  selector: 'app-team-challenges',
  templateUrl: './team-challenges.component.html',
  styleUrls: ['./team-challenges.component.scss']
})
export class TeamChallengesComponent implements OnInit {

  public userEntries$: Observable<UserEntries>;
  public teamChallenges$: Subscription;

  // Test
  public data = [];
  public columns: ITdDataTableColumn[] = [
    { name: 'name', label: 'Title', tooltip: 'Title from name property on TeamChallenge' },
    { name: 'userFullName', label: 'Created By', tooltip: 'Created By from userFullName property on TeamChallenge' },
    { name: 'modifiedDate', label: 'Modified', format: v => {
      const date = new Date(v);
      return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`;
    }},
    { name: 'numberInvited', label: 'Invited', tooltip: 'Invited from numberInvited property on TeamChallenge' },
    { name: 'numberOfEntries', label: 'Entries', tooltip: 'Entries from numberOfEntries property on TeamChallenge' },
    { name: 'numberToReview', label: 'To Review', tooltip: 'To Review from numberToReview property on TeamChallenge' },
  ];

  public filteredData: any[] = this.data;
  public filteredTotal: number = this.data.length;

  public searchTerm = '';
  public fromRow = 1;
  public pageSize = 5;
  public currentPage = 1;
  public sortBy = 'name';
  public sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(
    public store: Store<AppState>,
    private _dataTableService: TdDataTableService,
  ) {
    this.userEntries$ = this.store
      .select(getUserStatistics);

    this.teamChallenges$ = this.store
      .select(getTeamChallenges)
      .map(values)
      .subscribe((teamChallenges) => {
        this.data = teamChallenges;
        this.filter();
      });
  }

  ngOnInit() {
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    if (this.sortBy === sortEvent.name) {
      this.sortOrder = sortEvent.order === TdDataTableSortingOrder.Ascending ?
      TdDataTableSortingOrder.Descending :
      TdDataTableSortingOrder.Ascending;
    }
    this.sortBy = sortEvent.name;
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
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }
}
