import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationService} from '../service/registrationService';
import {Registration} from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private registrationService: RegistrationService
  ) {
  }

  register() {
    this.registrationService.addUser(this.model).subscribe(
      (response: Registration) => {
        console.log(response);
        this.router.navigate(['login']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  }
}
