import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { Location } from '@angular/common';
import {Category, Book} from "../models";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  category: Category;
  books: Book[] = [];

  constructor(private companyService: CompanyService, private route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
    this.getCategory();
    this.getCategoryBooks();
  }

  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCategory(id).subscribe(category => this.category = category);
  }
  getCategoryBooks() {
    const id = +this.route.snapshot.paramMap.get('id');
    const newsObservable = this.companyService.getCategoryBooks(id)
    .subscribe( books => this.books = books);
  }
  goBack(): void {
    this.location.back();
  }

}
