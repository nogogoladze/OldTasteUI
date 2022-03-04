import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CompanyComponent} from "./company/company.component";
import { ProviderComponent } from './provider/provider.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'company', component: CompanyComponent},
  {path: '', component: HomeComponent},
  {path: 'provider', component: ProviderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
