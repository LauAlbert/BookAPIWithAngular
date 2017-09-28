import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BookService {
    constructor(private http: Http) {}
    GOOGLE_BOOK_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
    API_KEY = 'AIzaSyA8qfvhtlpuK9K_WtEyE2-sAvZRc1wiFBQ';

    searchBook(query: string) {
        console.log('hello');
        return this.http.get(this.GOOGLE_BOOK_BASE_URL, {params: {q: query, key: this.API_KEY}})
        .map((response: Response) => {
            const data = response.json();
            console.log('world');
            console.log(data);
            return data;
        });
    }
}
