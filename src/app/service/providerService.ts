import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Provider } from "../provider/provider";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ProviderService{
    private serverUrl = environment.apiLocalUrl;

    constructor(private httpClient: HttpClient){}

    public getProvider(): Observable<Provider[]> {
        return this.httpClient.get<Provider[]>(`${this.serverUrl}/provider`);
    }

    public updateProvider(provider: Provider): Observable<Provider> {
        return this.httpClient.put<Provider>(`${this.serverUrl}/provider/update`, provider);
    }

    public addProvider(provider: Provider): Observable<Provider> {
        return this.httpClient.post<Provider>(`${this.serverUrl}/provider/save`, provider);
    }
    
    public deleteProvider(providerId: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.serverUrl}/provider/delete/${providerId}`);
    }

}