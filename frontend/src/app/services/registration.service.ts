import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registration(user: User){
    return this.http.post<User>("http://localhost:8080/users/create", user);
  }

  getAllUsernames(){
    return this.http.get<User[]>("http://localhost:8080/users/get");
  }
}
