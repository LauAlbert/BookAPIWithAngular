import { Book } from './books/book.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BookService {
    constructor(private http: Http) {}
    GOOGLE_BOOK_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
    API_KEY = 'AIzaSyA8qfvhtlpuK9K_WtEyE2-sAvZRc1wiFBQ';

    selectedBook = new EventEmitter<Book>();
    newSearch = new EventEmitter<Book[]>();

    searchResult: Book[] = [];

    searchBook(query: string) {
        return this.http.get(this.GOOGLE_BOOK_BASE_URL, {params: {q: query, key: this.API_KEY}})
        .map((response: Response) => {
            const data = response.json();
            this.searchResult = data.items;
            this.newSearch.emit(this.searchResult.slice());
            return data;
        });
    }
}
