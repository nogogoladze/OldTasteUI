import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";
import {CompanyComponent} from "./company/company.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProviderComponent} from './provider/provider.component';
import {RegistrationComponent} from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    ProviderComponent,
    RegistrationComponent,
    LoginComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
