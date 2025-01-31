import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API = 'http://localhost:5000/api/usuarios';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.API);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.API, user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(this.API, user);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }
}
