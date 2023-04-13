import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users';
  constructor( private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }
}
