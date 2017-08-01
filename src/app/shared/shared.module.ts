import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdMenuModule,
  MdTabsModule,
  MdCardModule,
  MdChipsModule,
  MdButtonModule,
  MdToolbarModule,
  MdGridListModule,
} from '@angular/material';
import {
  CovalentSearchModule,
  CovalentPagingModule,
  CovalentDataTableModule,
} from '@covalent/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const SHARED_MODULES = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,

  MdMenuModule,
  MdTabsModule,
  MdCardModule,
  MdChipsModule,
  MdButtonModule,
  MdToolbarModule,
  MdGridListModule,

  CovalentSearchModule,
  CovalentPagingModule,
  CovalentDataTableModule,

  NgxChartsModule,
];

const SHARED_COMPONENTS = [
  NavbarComponent,
  FooterComponent,
];

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  declarations: [
    ...SHARED_COMPONENTS
  ],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS,
  ],
})
export class SharedModule { }
