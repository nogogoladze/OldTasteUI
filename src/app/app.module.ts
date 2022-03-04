import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";
import {CompanyComponent} from "./company/company.component";
import { FormsModule } from '@angular/forms';
import { ProviderComponent } from './provider/provider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
