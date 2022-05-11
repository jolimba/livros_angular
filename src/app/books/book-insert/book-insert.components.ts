import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../book.model'

@Component({
  selector: 'app-book-insert',
  templateUrl: './book-insert.components.html',
  styleUrls: ['./book-insert.components.css']
})
export class BookInsertComponent{

  @Output()
  bookAdded = new EventEmitter<Book>();

  titulo: string;
  id: string;
  autor: string;
  pags: string;

  onAddBook(){
    this.bookAdded.emit({
      titulo: this.titulo,
      id: this.id,
      autor: this.autor,
      pags: this.pags
    });
  }
}
