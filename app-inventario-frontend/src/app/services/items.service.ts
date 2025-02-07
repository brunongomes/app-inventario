import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../shared/interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly API = 'http://localhost:5000/api/itens';
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item> {
    return this.http.get<Item>(this.API);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.API, item);
  }

  updateItem(item: Item): Observable<Item> {
    const id = item.id;
    delete item.id
    return this.http.put<Item>(`${this.API}/${id}`, item);
  }

  deleteItem(id: Item): Observable<Item> {
    return this.http.delete<Item>(`${this.API}/${id}`);
  }
}
