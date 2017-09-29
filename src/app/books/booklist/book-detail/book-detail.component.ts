import { Book } from './../../book.model';
import { BookService } from './../../../book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.selectedBook.subscribe((book) => this.book = book);
  }

}
