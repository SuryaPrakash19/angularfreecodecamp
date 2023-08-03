import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsListComponent, HeaderComponent, ContainerComponent, EmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}