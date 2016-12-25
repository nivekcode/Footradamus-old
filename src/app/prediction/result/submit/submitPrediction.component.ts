/**
 * Created by kevinkreuzer on 24.12.16.
 */
import {Component, Input} from "@angular/core";
import prediction from "../../../model/prediction.model";
import {Store} from "@ngrx/store";
import match from "../../../model/match.model";
import team from "../../../model/team.model";

@Component({
  selector: 'submit-prediction',
  templateUrl: 'submitPrediction.html'
})
export default class SubmitComponent {

  @Input() private winner: string;
  private matchDate;
  private homeTeam: team;
  private awayTeam: team;

  constructor(private store: Store<match>){
    store.select('match')
      .subscribe((match: match) => {
        this.homeTeam = match.homeTeam;
        this.awayTeam = match.awayTeam;
    });
  }

  submitPrediction() {

    let prediction: prediction = {
      leagueID: '1204',
      homeTeam: this.homeTeam.name,
      awayTeam: this.awayTeam.name,
      winner: this.winner,
      matchDate: this.matchDate.formatted
    };
    console.table([prediction]);
  }
}
