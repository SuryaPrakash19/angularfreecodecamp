import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login/login-service.service';
import { loginGuard } from './login/Gaurds/login.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'rooms',
    loadChildren: () => {
      return import('./rooms/rooms.module').then((m) => m.RoomsModule);
    },
    //canLoad: [loginGuard],
  },
  {
    path: 'employee',
    loadChildren: () => {
      return import('./employee/employee.module').then((m) => m.EmployeeModule);
    },

    //canActivate: [loginGuard],
  },
  {
    path: 'booking',
    loadChildren: () => {
      return import('./booking/booking.module').then((m) => m.BookingModule);
    },
    //canLoad: [loginGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private loginService: LoginServiceService) {}
}
