import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor(private router: Router) {}
  Login(email: string, password: string): boolean {
    if (email == 'admin@gmail.com' && password == 'Admin') {
      alert('Correct password!');
      this.isLoggedIn = true;
      this.isAdmin = true;
    } else if (email == 'user@gmail.com' && password == 'User') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
}
