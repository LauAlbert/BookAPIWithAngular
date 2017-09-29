import { BookService } from './../book.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private bookService: BookService) { }

  searchBook() {
    this.bookService.searchBook(this.searchInput.nativeElement.value).subscribe();
    // this.bookService.searchBook(this.searchInput.nativeElement.value).subscribe((response) => console.log(response),
    //    (error) => console.log(error));
  }

  ngOnInit() {
  }

}
