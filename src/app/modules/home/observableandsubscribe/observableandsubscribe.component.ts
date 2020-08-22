import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-observableandsubscribe',
  templateUrl: './observableandsubscribe.component.html',
  styleUrls: ['./observableandsubscribe.component.css']
})
export class ObservableandsubscribeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'category', 'action'];
  books: Book[];
  //Oservable with async pipe
  //books: Observable<Book[]>;
  //book:Book;
  book: Observable<Book>;
  //bookName:string;
  bookName: Observable<string>;
  bookForm: FormGroup;
  isDataSaved: boolean;
  bookInfo: Book;
  toUpdateBookId: number = null;
  isUpdate:boolean;
  isdeleted:boolean;

  constructor(private bookService: BookService, private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit() {

    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
    });

    this.getBooks();
    //this.getBookById();
    //this.getBookNameById();
  }

  createBook() {
    let book = this.bookForm.value;
    this.createBookInDB(book);
    this.bookForm.reset();
  }

  createBookInDB(book: Book) {
    if (this.toUpdateBookId == null) {
      this.bookService.createBook(book).subscribe(result => {
        this.isdeleted=false;
        this.isUpdate=false;
        this.isDataSaved = true;
        this.getBooks();
        this.toUpdateBookId=null;
        this.cdr.detectChanges();
      });
    }
    else {
      book.id=this.toUpdateBookId;
      this.bookService.updateBook(book).subscribe(result => {
        this.isdeleted=false;
        this.isDataSaved=false;
        this.isUpdate=true;
        this.getBooks();
        this.toUpdateBookId=null;
      });
    }
    }

    getBooks() {
      this.bookService.getBooksFromStore().subscribe(result =>
        this.books = result
      );

      //Oservable with async pipe
      //this.books = this.bookService.getBooksFromStore();
    }

    getBookById() {
      // this.bookService.getBookById(100).subscribe(result => 
      //   this.book=result
      //   );

      //Oservable with async pipe
      //this.book=this.bookService.getBookById(101);
    }

    getBookNameById() {

      // this.bookService.getBookById(101)
      // .pipe(map(book => 'Name: '+book.name)).subscribe(name =>{
      //   this.bookName=name;
      // });

      //Oservable with map
      this.bookName = this.bookService.getBookById(101)
        .pipe(map(book => 'Name: ' + book.name));
    }

    editBook(id: number){
      this.bookService.getBookById(id).subscribe(book => {
        this.toUpdateBookId = book.id;
        this.bookForm.controls['name'].patchValue(book.name);
        this.bookForm.controls['category'].patchValue(book.category);
      });
    }

    deleteBook(id: number){
      this.bookService.deleteBook(id).subscribe(result=>{
        this.isDataSaved=false;
        this.isUpdate=false;
        this.isdeleted=true;
        this.getBooks();
      })
    }

  }
