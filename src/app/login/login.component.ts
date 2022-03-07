import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/loginService';
import { Logins } from './logins';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.loginUser(this.model).subscribe(
          (response: Logins) => {
            console.log(response);
            this.router.navigate(['home']);
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          },
        );
    
}

}
