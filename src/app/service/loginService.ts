import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";
import { Logins } from "../login/logins";

@Injectable({providedIn: 'root'})
export class LoginService {
  private serverUrl = environment.apiLocalUrl;

  constructor(private httpClient: HttpClient) {
  }

  public loginUser(login: Logins): Observable<Logins> {
    return this.httpClient.post<Logins>(`${this.serverUrl}/login`, login);
  }
}
