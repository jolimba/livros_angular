import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  // books = [
  //   {
  //     titulo: "José",
  //     id: "123456789",
  //     autor: "jose@gmail.com"
  //   },
  //   {
  //     titulo: "Maria",
  //     id: "963258741",
  //     autor: "maria@gmail.com"
  //   }
  // ]
  @Input()
  books: Book[] = [];

}
