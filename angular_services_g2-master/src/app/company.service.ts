import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Company, LoginResponse, Vacancy} from "./models";
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
    BASE_URL = 'http://localhost:8000'

    constructor(private http:HttpClient){}

  getCompanyList(): Observable<Company[]> {
      return this.http.get<Company[]>(`${this.BASE_URL}/api/categories/`)
  }
  getCompany(id): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/api/categories/${id}/`);
  }
  getCompanyVacancies(id): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/categories/${id}/books/`)
  }
 

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }





}
