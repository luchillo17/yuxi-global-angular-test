import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {
  ChallengesComponent,
  UserChallengesComponent,
  TeamChallengesComponent,
} from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    ChallengesComponent,
    UserChallengesComponent,
    TeamChallengesComponent,
  ],
  exports: [
    DashboardComponent,
    StatisticsComponent,
    ChallengesComponent,
    UserChallengesComponent,
    TeamChallengesComponent,
  ],
})
export class DashboardModule { }
