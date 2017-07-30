import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import {
  CoreModule,
  DashboardModule,
  ChallengesModule,
} from '.';

import { AppReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument(),

    SharedModule,

    CoreModule,
    DashboardModule,
    ChallengesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
