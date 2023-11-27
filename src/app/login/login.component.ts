import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {}
  Login() {
    if (this.email == 'admin@gmail.com' && this.password == 'Admin') {
      alert('Correct password!');
      this.router.navigate(['/rooms']);
    }
  }
}
