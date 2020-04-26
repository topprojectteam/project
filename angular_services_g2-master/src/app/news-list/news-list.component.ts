import { Component, OnInit } from '@angular/core';
import { CompanyService } from "../company.service";
import {Category} from "../models"

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  categories: Category[] = [];

  constructor(public companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    const newsObservable = this.companyService.getCategoryList()
    .subscribe( categories => this.categories = categories);
  }


}
