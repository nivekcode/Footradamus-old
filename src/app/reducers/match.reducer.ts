import {ActionReducer, Action} from "@ngrx/store";
import match from "../model/match.model";
/**
 * Created by kevinkreuzer on 16.11.16.
 */

let initialMatch: match = {
  homeTeam: undefined,
  awayTeam: undefined
}

export const ADD_HOMETEAM = 'ADD_HOMETEAM';
export const ADD_AWAYTEAM = 'ADD_AWAYTEAM';

export const matchReducer: ActionReducer<match> = (state: match = initialMatch, action: Action) => {
  switch (action.type) {
    case ADD_HOMETEAM:
      return {
        homeTeam: action.payload,
        awayTeam: state.awayTeam
      };
    case ADD_AWAYTEAM:
      return {
        homeTeam: state.homeTeam,
        awayTeam: action.payload
      };
    default:
      return state;
  }
}
