/**
 * Created by kevinkreuzer on 16.11.16.
 */

import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import match from "../model/match.model";

@Injectable()
export default class PredictionService {

  constructor(private store: Store<match>) {
    this.store.select('match').subscribe(match => {
      console.log('Das kommt aus dem Store', match);
    })
  }
}
