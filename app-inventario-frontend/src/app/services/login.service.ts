import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin, ILoginResponse } from '../@types/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:5000/api/auth/login';
  constructor(private http: HttpClient) {}

  makeLogin(login: ILogin): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(this.API, login);
  }
}
