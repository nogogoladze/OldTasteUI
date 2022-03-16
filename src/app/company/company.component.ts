import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from '@angular/forms';
import {Company} from '../model/company';
import { CompanyService } from '../_service/company.service';

export class Location {
  constructor(
    public id: number,
    public country: string,
    public countryCode: string,
    public currency: string,
    public region: string,
    public districts: string,
    public address: string
  ) {
  }
}

export class Product {
  constructor(
    public id: number,
    public productName: string,
    public releaseStartDate: string,
    public releaseEndDate: string,
    public price: number
  ) {
  }
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {
  public companies: Company[];

  currentUser: any;

  closeResult: string;

  public editCompany: Company;
  public deleteCompan: Company;

  constructor(
    private companyService: CompanyService
  ) {
  }

  ngOnInit() {
    this.getCompany()
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


  // onSubmit(company: NgForm) {
  //   const url = `${this.serverUrl}/company/save`;
  //   this.httpClient.post(url, company.value)
  //     .subscribe((result) => {
  //       this.ngOnInit(); //reload the table
  //     });
  //   this.modalService.dismissAll(); //dismiss the modal
  // }

  public addCompany(addForm: NgForm): void {
    document.getElementById('add-company-form').click();
    this.companyService.addCompany(addForm.value).subscribe(
      (response: Company) => {
        console.log(response);
        this.getCompany();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    );
  }

  public updateCompany(company: Company): void {
    this.companyService.updateCompany(company).subscribe(
      (response: Company) => {
        console.log(response);
        this.getCompany();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteCompany(companyId: number): void {
    this.companyService.deleteCompany(companyId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCompany;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openModal(company: Company, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCompanyModal');
    }
    if (mode === 'edit') {
      this.editCompany = company;
      button.setAttribute('data-target', '#editCompanyModal');
    }
    if (mode === 'delete') {
      this.deleteCompan = company;
      button.setAttribute('data-target', '#deleteCompanyModal');
    }
    if (mode === 'detail') {
      button.setAttribute('data-target', '#providersDetail');
    }

    container.appendChild(button);
    button.click();
  }
}
