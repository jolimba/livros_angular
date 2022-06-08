import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Book } from "./book.model";

@Injectable({providedIn:'root'})

export class BookService {
  private books: Book[] = []
  private listBookUpdated = new Subject<Book[]>();

  constructor(private httpClient: HttpClient){}

  getBook():void {
    this.httpClient.get<{mensagem:string, books:Book[]}>('http://localhost:3000/api/books')
      .subscribe((data) => {
        this.books = data.books;
        this.listBookUpdated.next([...this.books])
      }
    )
  }

  addBook(titulo:string, id:string, pags:string, autor:string){
    const book:Book = {
      titulo: titulo,
      id: id,
      pags: pags,
      autor: autor
    }
    this.httpClient.post<{mensagem:string, books:Book}>('http://localhost:3000/api/books', book)
      .subscribe(
        (data) => {
          console.log(data.mensagem)
          this.books.push(book)
          this.listBookUpdated.next([...this.books])
        }
      )
  }

  getListBooksUpdatedObservable() {
    return this.listBookUpdated.asObservable()
  }
}
