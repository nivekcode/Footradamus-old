import {ActionReducer} from "@ngrx/store";
import match from "../../model/match.model";
import {Action} from "rxjs/scheduler/Action";
/**
 * Created by kevinkreuzer on 16.11.16.
 */

let initialMatch: match = {
  homeTeam: undefined,
  awayTeam: undefined
}

export const matchReducer: ActionReducer<match> = (state: match = initialMatch, action: Action) => {
  switch(action.type){
    case matchAT.ADD:
      return state;
    default:
      return state;
  }
}
