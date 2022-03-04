import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Company } from "../company/company";

@Injectable({providedIn: 'root'})
export class CompanyService{
    private serverUrl = environment.apiLocalUrl; 

    constructor(private httpClient: HttpClient){}

    public getCompany(): Observable<Company[]> {
        return this.httpClient.get<Company[]>(`${this.serverUrl}/company`);
    }

    public updateCompany(company: Company): Observable<Company> {
        return this.httpClient.put<Company>(`${this.serverUrl}/company/update`, company);
    }

    public addCompany(company: Company): Observable<Company> {
        return this.httpClient.post<Company>(`${this.serverUrl}/company/save`, company);
    }
    
    public deleteCompany(employeeId: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.serverUrl}/company/delete/${employeeId}`);
    }

}