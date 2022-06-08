import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Book } from '../book.model'
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books:Book[] = [];
  private booksSubscription: Subscription

  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBook()
    this.booksSubscription = this.bookService
      .getListBooksUpdatedObservable()
      .subscribe((books:Book[]) => {
        this.books = books
        console.log(books)
      })
  }

  ngOnDestroy():void {
    this.booksSubscription.unsubscribe()
  }
}
