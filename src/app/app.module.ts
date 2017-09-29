import { AppRoutingModule } from './app-routing.module';
import { BookService } from './book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { BooklistComponent } from './books/booklist/booklist.component';
import { BookItemComponent } from './books/booklist/book-item/book-item.component';
import { BookDetailComponent } from './books/booklist/book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    BooklistComponent,
    BookItemComponent,
    BookDetailComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
