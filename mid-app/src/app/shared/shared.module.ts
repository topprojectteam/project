import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColumnTwoComponent } from './layouts/column-two/column-two.component';



@NgModule({
  declarations: [ColumnOneComponent, HeaderComponent, BodyComponent, FooterComponent, ColumnTwoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ColumnOneComponent,
    ColumnTwoComponent
  ]
})
export class SharedModule { }
