import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = []
  onAddedBook (book) : void {
    this.books = [...this.books, book]
    console.log(this.books)
  }
}
