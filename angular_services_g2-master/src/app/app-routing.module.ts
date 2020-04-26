import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';


const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'category/:id', component: NewsPageComponent },
  { path: 'category/:id/books/:id', component: BooksDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
