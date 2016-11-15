import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import MatchSelectionModule from "./match-selection/matchSelection.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatchSelectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
