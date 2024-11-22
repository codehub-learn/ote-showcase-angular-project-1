import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return [
      { id: 1, firstname: "Ioannis", lastname: "Daniil", address: "13th Av.", dateOfBirth: "15/5/75" },
      { id: 2, firstname: "Ioanna", lastname: "Geovinch", address: "15th Av.", dateOfBirth: "15/5/86" },
      { id: 3, firstname: "Dimitra", lastname: "Damter", address: "18th Str.", dateOfBirth: "15/5/65" },
    ]
  }

  getUsersOnline(){
    // HttpClient
    let endpoint = "https://reqres.in/api/users";
    return this.http.get(endpoint);
  }
}
