import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import PredictionModule from "./prediction/prediction.module";
import {StoreModule} from "@ngrx/store";
import {matchReducer} from "./reducers/match.reducer";
import {PROD_CONFIG} from "./app.config";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PredictionModule,
    StoreModule.provideStore({ match: matchReducer})
  ],
  providers: [
    { provide: 'config', useValue: PROD_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
