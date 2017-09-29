import { Book } from './../../book.model';
import { BookService } from './../../../book.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() bookInfo: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onSelected() {
    this.bookService.selectedBook.emit(this.bookInfo);
  }

}
