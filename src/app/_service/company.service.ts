import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";
import {Company} from "../model/company";
import { TokenStorageService } from "./token-storage.service";

@Injectable({providedIn: 'root'})
export class CompanyService {
  private serverUrl = environment.apiLocalUrl;
  
  constructor(
    private httpClient: HttpClient,
    private tokenStorageService: TokenStorageService
    ) {
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.tokenStorageService.getToken()}`})
  };
  

  public getCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.serverUrl + '/company', this.httpOptions);
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.serverUrl + '/company/update', company, this.httpOptions);
  }

  public addCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.serverUrl + '/company/save', company, this.httpOptions);
  }

  public deleteCompany(employeeId: number): Observable<void> {
    return this.httpClient.delete<void>(this.serverUrl + '/company/delete/' + employeeId, this.httpOptions);
  }

}
