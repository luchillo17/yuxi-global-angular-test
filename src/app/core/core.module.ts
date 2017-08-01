import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import {
  ConfigService,
  TeamChallengeService,
  UserChallengeService,
} from '.';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ConfigService,
        TeamChallengeService,
        UserChallengeService,
      ],
    };
  }
}
