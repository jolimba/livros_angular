import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-insert',
  templateUrl: './book-insert.components.html',
  styleUrls: ['./book-insert.components.css']
})
export class BookInsertComponent{
  constructor(public bookService: BookService){}

  onAddBook(form: NgForm){
    if(form.invalid){
      return
    }
    this.bookService.addBook(
      form.value.titulo,
      form.value.id,
      form.value.pags,
      form.value.autor
    )
    form.resetForm()
  }
}
