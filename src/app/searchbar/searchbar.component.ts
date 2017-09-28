import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private bookService: BookService) { }

  searchBook() {
    // this.bookService.searchBook('python');
    this.bookService.searchBook('python').subscribe((response) => console.log(response),
       (error) => console.log(error));
  }

  ngOnInit() {
  }

}
