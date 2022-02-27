import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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

export class Provider {
  constructor(
    public id: number,
    public contactPerson: string,
    public phone: number,
    public mail: string,
    public age: number,
    public description: string
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


export class Company {
  constructor(
    public id: number,
    public companyName: string,
    public owner: string,
    public contactPerson: string,
    public dataLoc: Location,
    public dataProviders: {providers: Provider[]},
    public dataProducts: {products: Product[]}
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



  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.getCompany()
  }

  getCompany(): void {
    this.httpClient.get<Company[]>('http://localhost:8080/api/v1/company').subscribe(
      (response: Company[]) => {
        this.companies = response;
      }
    );
  }

}
