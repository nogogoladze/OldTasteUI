import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";
import {Registration} from "../registration/registration";

@Injectable({providedIn: 'root'})
export class RegistrationService {
  private serverUrl = environment.apiLocalUrl;

  constructor(private httpClient: HttpClient) {
  }

  public addUser(registration: Registration): Observable<Registration> {
    return this.httpClient.post<Registration>(`${this.serverUrl}/registration`, registration);
  }
}
