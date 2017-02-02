/**
 * Created by kevinkreuzer on 24.12.16.
 */
import {Component, Input, Inject} from "@angular/core";
import prediction from "../../../model/prediction.model";
import {Store} from "@ngrx/store";
import match from "../../../model/match.model";
import team from "../../../model/team.model";
import {Http} from "@angular/http";
import * as moment from 'moment';

@Component({
  selector: 'submit-prediction',
  templateUrl: 'submitPrediction.html',
  styleUrls: ['./submitPrediction.css']
})
export default class SubmitComponent {

  @Input() private winner: string;
  private matchDate;
  private homeTeam: team;
  private awayTeam: team;
  private leagueId: string;
  private leagueName: string;

  constructor(private store: Store<match>, private http: Http, @Inject('config') private config) {
    store.select('match')
      .subscribe((match: match) => {
        this.leagueName = match.leagueName;
        this.leagueId = match.leagueId;
        this.homeTeam = match.homeTeam;
        this.awayTeam = match.awayTeam;
      });
  }

  submitPrediction() {
    let prediction: prediction = {
      leagueID: this.leagueId,
      leagueName: this.leagueName,
      homeTeam: this.homeTeam.name,
      homeTeamId: this.homeTeam.id,
      awayTeam: this.awayTeam.name,
      awayTeamId: this.awayTeam.id,
      winner: this.winner,
      matchDate: moment(this.matchDate.formatted, 'YYYY-MM-DD').format('DD.MM.YYYY')
    };

    this.http.post(`${this.config.predictionBackendUrl}/predictions`, prediction)
      .subscribe(() => console.log('Successfully added'),
        () => console.log('An error occured'));
  }
}
