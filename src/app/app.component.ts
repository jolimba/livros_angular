import { Component } from '@angular/core';
import { Book } from './books/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books:Book[] = []
  onAddedBook (book) : void {
    this.books = [...this.books, book]
    console.log(this.books)
  }
}
