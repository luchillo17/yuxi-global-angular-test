import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ConfigService,
  TeamChallengeService,
  UserChallengeService,
} from '.';

@NgModule({
  imports: [
    CommonModule,
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
