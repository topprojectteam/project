import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { Location } from '@angular/common';
import { Book} from "../models";

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  book: Book;
  books: Book[] = [];

  constructor(private companyService: CompanyService, private route: ActivatedRoute,private location: Location ) {}

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

  edit(title: string): void {
    console.log("h");
    title = title.trim();
    this.companyService.editBook({title} as Book)
      .subscribe(book => {
        this.books.push(book);
      }); 
       console.log("h");
  }


  goBack(): void {
    this.location.back();
  }


}
