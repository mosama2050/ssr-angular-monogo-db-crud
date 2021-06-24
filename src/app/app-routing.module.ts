import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import {RouterModule, Routes} from "@angular/router";
import {BooksDetailsComponent} from "./books-details/books-details.component";
import {BooksAddComponent} from "./books-add/books-add.component";
import {BooksEditComponent} from "./books-edit/books-edit.component";

// ng generate module app-routing --flat --module=app
const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    data: { title: 'Books' }
  },
  {
    path: 'book-details/:id',
    component: BooksDetailsComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-add',
    component: BooksAddComponent,
    data: { title: 'Add Book' }
  },
  {
    path: 'book-edit/:id',
    component: BooksEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{
      initialNavigation:'enabled'
    })
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
