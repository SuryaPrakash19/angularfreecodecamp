import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'rooms',
    loadChildren: () => {
      return import('./rooms/rooms.module').then((m) => m.RoomsModule);
    },
  },
  {
    path: 'employee',
    loadChildren: () => {
      return import('./employee/employee.module').then((m) => m.EmployeeModule);
    },
  },
  {
    path: 'booking',
    loadChildren: () => {
      return import('./booking/booking.module').then((m) => m.BookingModule);
    },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
