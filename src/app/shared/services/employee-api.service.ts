import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  constructor(private http: HttpClient) { }

  public getEmployees() {
    return this.http.get('https://reqres.in/api/users?page=1');
  }
}
