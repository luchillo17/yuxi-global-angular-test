import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MdMenuModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdMenuModule
  ],
  declarations: [ NavbarComponent, FooterComponent ],
  exports: [ NavbarComponent, FooterComponent ]
})
export class SharedModule { }
