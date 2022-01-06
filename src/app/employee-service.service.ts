import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class EmployeeServiceService {

  baseUri : 'http://localhost:8080/employee/save';

  constructor(private http: HttpClient) { }


  //1. save data
  createEmployee(employee: Employee): Observable<any> {
    return this.http.post(`${this.baseUri}`, employee, {
      responseType: 'text',
    });
  }
       //2. fetch all
  fetchAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUri}/all`);
  }


   //3. fetch one
   fetchOneEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUri}/find/${id}`);
  }

  //4. remove
  removeOneEmployee(id: number) {
    return this.http.delete(`${this.baseUri}/remove/${id}`, {
      responseType: 'text',
    });
  }
//5. update
updateOneEmployee(employee: Employee) {
  return this.http.put(`${this.baseUri}/modify`, {
    responseType: 'text',
  });
}

}