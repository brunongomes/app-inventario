import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../@types/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly API = 'http://localhost:5000/api/itens';
  constructor(private http: HttpClient) {}

  getItems(): Observable<Items> {
    return this.http.get<Items>(this.API);
  }

  createItem(item: Items): Observable<Items> {
    return this.http.post<Items>(this.API, item);
  }

  updateItem(item: Items): Observable<Items> {
    return this.http.put<Items>(this.API, item);
  }

  deleteItem(id: Items): Observable<Items> {
    return this.http.delete<Items>(this.API + '/' + id);
  }
}
