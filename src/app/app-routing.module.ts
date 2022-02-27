import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./homes/home.component";
import {CompanyComponent} from "./companys/company.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'company', component: CompanyComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
