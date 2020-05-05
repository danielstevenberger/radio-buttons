import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatRadioModule} from '@angular/material/radio';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { OperationsComponent } from './operations/operations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
