import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {
  ChallengesComponent,
  UserChallengesComponent,
  TeamChallengesComponent,
} from '.';
import { TeamStatisticsComponent } from './statistics/team-statistics/team-statistics.component';
import { UserStatisticsComponent } from './statistics/user-statistics/user-statistics.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    ChallengesComponent,

    TeamStatisticsComponent,
    UserStatisticsComponent,

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
