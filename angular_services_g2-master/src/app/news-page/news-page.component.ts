import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import {Company, Vacancy} from "../models";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  company: Company;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCompany();
    this.getCompanyVacancies();
  }

  getCompany() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id).subscribe(company => this.company = company);
  }
  getCompanyVacancies() {
    const id = +this.route.snapshot.paramMap.get('id');
    const newsObservable = this.companyService.getCompanyVacancies(id)
    .subscribe( vacancies => this.vacancies = vacancies);
  }

}
