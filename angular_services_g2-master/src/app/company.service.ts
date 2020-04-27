import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";
import {Category, LoginResponse, Book} from "./models";
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
    BASE_URL = 'http://localhost:8000';
    httpOptions ={
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }; 

    constructor(private http:HttpClient){}

  getCategoryList(): Observable<Category[]> {
      return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`)
  }
  getCategory(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }
  getCategoryBooks(id): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.BASE_URL}/api/categories/${id}/books/`)
  }
  getBook(id): Observable<Book> {
    return this.http.get<Book>(`${this.BASE_URL}/api/books/${id}/`);
  }
  deleteBook(book:Book | number): Observable<Book>{
    const id = typeof book === 'number' ? book : book.id;
    return this.http.delete<Book>(`${this.BASE_URL}/api/books/${id}/`);
  }
  updateBook (book: Book): Observable<any> {
    return this.http.put(`${this.BASE_URL}/api/books/${book.id}/`, book, this.httpOptions);
  }



  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }


// const body = {title: book.title,description:book.description,
    //   author:book.author,cost:book.const,img_url:book.img_url,
    //   category_id:book.category_id,publishing_house_id:book.publishing_house_id}



}
