import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Book } from '../book';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {


  // @ts-ignore
  book: Book = {
    _id: '',
    isbn: '',
    title: '',
    author: '',
    description: '',
    publisher: '',
    publishedYear: '',
    // @ts-ignore
    updatedAt: null
  };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getBookDetails(this.route.snapshot.paramMap.get('id'));
  }

  getBookDetails(id: any): void {
    this.api.getBook(id)
      .subscribe((data: any) => {
        this.book = data;
        console.log(this.book);
        this.isLoadingResults = false;
      });
  }

  deleteBook(id: any): void {
    this.isLoadingResults = true;
    this.api.deleteBook(id)
      .subscribe(() => {
          this.isLoadingResults = false;
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
