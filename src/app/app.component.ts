import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles!: string[];
  isLoggedIn = false;
  showCompany = false;
  showProvider = false;

  username!: string;
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showCompany = this.roles.includes('ROLE_ADMIN');
      this.showProvider = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }}
