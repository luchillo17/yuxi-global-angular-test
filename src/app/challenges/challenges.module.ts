import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UserChallengesComponent,
  TeamChallengesComponent,
} from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserChallengesComponent,
    TeamChallengesComponent,
  ]
})
export class ChallengesModule { }
