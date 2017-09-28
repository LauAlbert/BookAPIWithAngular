import { BookService } from './book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookComponent } from './booklist/book/book.component';
import { BookDetailComponent } from './booklist/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    BooklistComponent,
    BookComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
