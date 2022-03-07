import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Company} from '../company/company';
import {CompanyService} from '../service/companyService';
import {ProviderService} from '../service/providerService';
import {Provider} from './provider';


@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  public providers: Provider[];
  public companies: Company[];

  public editProvider: Provider;
  public deleteProvider: Provider;

  constructor(
    private providerService: ProviderService,
    private companyService: CompanyService
  ) {
  }

  ngOnInit(): void {
    this.getProvider()
  }

  public getProvider(): void {
    this.providerService.getProvider().subscribe(
      (response: Provider[]) => {
        this.providers = response;
        console.log(this.providers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addProvider(addForm: NgForm): void {
    document.getElementById('add-provider-form').click();
    this.providerService.addProvider(addForm.value).subscribe(
      (response: Provider) => {
        console.log(response);
        this.getProvider();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    );
  }

  public updateProvider(provider: Provider): void {
    this.providerService.updateProvider(provider).subscribe(
      (response: Provider) => {
        console.log(response);
        this.getProvider();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteProviders(providerId: number): void {
    this.providerService.deleteProvider(providerId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProvider;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getCompany(): void {
    this.companyService.getCompany().subscribe(
      (response: Company[]) => {
        this.companies = response;
        console.log(this.companies);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openModal(provider: Provider, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProviderModal');
    }
    if (mode === 'relateCompany') {
      button.setAttribute('data-target', '#relateCompanyModal');
    }
    if (mode === 'edit') {
      this.editProvider = provider;
      button.setAttribute('data-target', '#editProviderModal');
    }
    if (mode === 'delete') {
      this.deleteProvider = provider;
      button.setAttribute('data-target', '#deleteProviderModal');
    }

    container.appendChild(button);
    button.click();
  }

}
