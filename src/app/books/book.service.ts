import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Book } from "./book.model";

@Injectable({providedIn:'root'})

export class BookService {
  private books: Book[] = []
  private listBookUpdated = new Subject<Book[]>();

  getBook(): Book[] {
    return [...this.books]
  }

  addBook(titulo:string, id:string, pags:string, autor:string){
    const book:Book = {
      titulo: titulo,
      id: id,
      pags: pags,
      autor: autor
    }
    this.books.push(book)
    this.listBookUpdated.next([...this.books])
  }

  getListBooksUpdatedObservable() {
    return this.listBookUpdated.asObservable()
  }
}
