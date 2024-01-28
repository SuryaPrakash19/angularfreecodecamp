import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private loginService: LoginServiceService
  ) {}
  ngOnInit(): void {}
  Login() {
    if (this.loginService.Login(this.email, this.password)) {
      this.router.navigate(['/rooms']);
    }
  }
}
