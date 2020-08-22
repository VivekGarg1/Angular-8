import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookUrl = 'api/books';

  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<Book> {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.http.post<Book>(this.bookUrl, book, options);
  }

  getBooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookUrl + '/' + id);
  }

  updateBook(book: Book): Observable<Book> {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.http.put<Book>(this.bookUrl+'/'+book.id, book, options);
  }

  deleteBook(id: number): Observable<Book> {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.http.delete<Book>(this.bookUrl+'/'+id, options);
  }
}

