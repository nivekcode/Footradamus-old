import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import TeamSelectionModule from "./team-selection/teamSelection.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TeamSelectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
