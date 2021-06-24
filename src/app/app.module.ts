import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BooksComponent} from "./books/books.component";
import {BooksAddComponent} from "./books-add/books-add.component";
import {BooksDetailsComponent} from "./books-details/books-details.component";
import {BooksEditComponent} from "./books-edit/books-edit.component";
import { AppRoutingModule } from './app-routing.module';
//services crud
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksAddComponent,
    BooksDetailsComponent,
    BooksEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
