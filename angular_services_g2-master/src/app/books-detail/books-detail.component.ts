import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { Book} from "../models";

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  book: Book;
  books: Book[] = [];

  constructor(private companyService: CompanyService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getBook(id).subscribe(book => this.book = book);
  }

  delete(book: Book): void {
    this.books = this.books.filter(book => book !== book);
    this.companyService.deleteBook(book).subscribe();
  }

  addBook(): void{
    const title = (document.getElementById('title') as HTMLInputElement).value.trim();
    const description = (document.getElementById('description') as HTMLInputElement).value.trim();
    const author = (document.getElementById('author') as HTMLInputElement).value.trim();
    const img_url = (document.getElementById('img_url') as HTMLInputElement).value.trim();
    const cost = +(document.getElementById('cost') as HTMLInputElement).value.trim();




    const request: Book = {title,description,author,img_url,cost};
    this.companyService.addBook(request).subscribe(() => alert('book added'));

    (document.getElementById('title') as HTMLInputElement).value = null;
    (document.getElementById('description') as HTMLInputElement).value = null;
    (document.getElementById('author') as HTMLInputElement).value = null;
    (document.getElementById('img_url') as HTMLInputElement).value = null;
    (document.getElementById('cost') as HTMLInputElement).value = null;
    (document.getElementById('cost') as HTMLInputElement).value = null;

  }

}
