import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookInsertComponent } from './books/book-insert/book-insert.components';

import { AppComponent } from './app.component';

import { MatFormFieldModule } from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';

import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';

import { MatToolbarModule } from '@angular/material/toolbar';

import { BookListComponent } from './books/book-list/book-list.component'

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    BookInsertComponent,
    AppComponent,
    CabecalhoComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
