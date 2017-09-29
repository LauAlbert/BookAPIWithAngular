import { Book } from './../book.model';
import { BookService } from './../../book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.newSearch.subscribe((books: Book[]) => {
      this.books = books;
    });
  }

}
