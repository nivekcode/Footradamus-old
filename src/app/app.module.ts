import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {matchReducer} from "./reducers/match.reducer";
import {PROD_CONFIG} from "./app.config";
import appRoutes from './app.routes';
import NavbarComponent from "./navbar/navabar.component";
import MessagesModule from "./messages/messages.module";

@NgModule({
  declarations: [
    AppComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MessagesModule,
    StoreModule.provideStore({match: matchReducer}),
    appRoutes
  ],
  providers: [
    {provide: 'config', useValue: PROD_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
