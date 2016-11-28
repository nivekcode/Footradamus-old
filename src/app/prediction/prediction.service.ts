/**
 * Created by kevinkreuzer on 16.11.16.
 */

import {Injectable} from "@angular/core";
import StatisticService from "./statstics.service";

@Injectable()
export default class PredictionService {

  constructor(private statsService: StatisticService) {
    this.statsService.$stats
      .subscribe(stats => {
          let homeTeamStats = stats[0].json().statistics[0];
          let homeTeamName = stats[0].json().name;
          let awayTeamStats = stats[1].json().statistics[0];
          let awayTeamName = stats[1].json().name;

          let willHomeTeamWin = this._predictResult(homeTeamStats, awayTeamStats);
          return willHomeTeamWin ? homeTeamName : awayTeamName;
        },
        () => {
          console.log('Unfortunatelly we were not able to get the team statistics');
        }
      );
  }

  private _predictResult(homeTeamStats, awayTeamStats) {
    let homeTeamPoints = this._getPointsForTeam(homeTeamStats, true);
    console.log('-------------------------');
    let awayTeamPoints = this._getPointsForTeam(awayTeamStats, false);
    console.log('Home Team Points', homeTeamPoints);
    console.log('Away Team Points', awayTeamPoints);
    return homeTeamPoints > awayTeamPoints;
  }

  private _getPointsForTeam(teamstats, isHomeTeam: boolean) {
    let points: number = 0;
    points += this._getWinLosDiff(teamstats);
    console.log('Wins', points);
    points += isHomeTeam ? this._getHomeWinnLosDiff(teamstats) : this._getAwayWinnLosDiff(teamstats);
    console.log('HomeWins', points);
    points += this._getCleanSheets(teamstats);
    console.log('Clean', points);
    points += isHomeTeam ? this._getHomeCleanSheets(teamstats) : this._getAwayCleanSheets(teamstats);
    console.log('Clean Home', points);
    points += this._getGoalDiff(teamstats);
    console.log('GoalDiff', points);
    points += isHomeTeam ? this._getHomeGoalsDiff(teamstats) : this._getAwayGoalsDiff(teamstats);
    console.log('HomeGoals', points);
    points += this._getFirstHalfGoals(teamstats);
    console.log('First Half Goals', points);
    points += this._getFirst75MinutesGoals(teamstats);
    console.log('75 Goals', points);

    return points;
  }

  private _getWinLosDiff(teamstats) {
    return parseInt(teamstats.wins) - parseInt(teamstats.losses);
  }

  private _getHomeWinnLosDiff(teamstats) {
    return (parseInt(teamstats.wins_home) - parseInt(teamstats.losses_home));
  }

  private _getAwayWinnLosDiff(teamstats) {
    return (parseInt(teamstats.wins_away) - parseInt(teamstats.losses_away));
  }

  private _getCleanSheets(teamstats) {
    return parseInt(teamstats.clean_sheets);
  }

  private _getHomeCleanSheets(teamstats) {
    return parseInt(teamstats.clean_sheets_home);
  }

  private _getAwayCleanSheets(teamstats) {
    return parseInt(teamstats.clean_sheets_away);
  }

  private _getGoalDiff(teamstats) {
    return parseInt(teamstats.goals) - parseInt(teamstats.goals_conceded);
  }

  private _getHomeGoalsDiff(teamstats) {
    return (parseInt(teamstats.goals_home) - parseInt(teamstats.goals_conceded_home));
  }

  private _getAwayGoalsDiff(teamstats) {
    return (parseInt(teamstats.goals_away) - parseInt(teamstats.goals_conceded_away));
  }

  private _getFirstHalfGoals(teamstats) {
    let percentageFHGoals = this._extractNumberFromPercentage(teamstats.scoring_minutes_0_15_pct) +
      this._extractNumberFromPercentage(teamstats.scoring_minutes_15_30_pct) +
      this._extractNumberFromPercentage(teamstats.scoring_minutes_30_45_pct);
    console.log('Halftime', percentageFHGoals);
    return 5 / 100 * percentageFHGoals;
  }

  private _getFirst75MinutesGoals(teamstats) {
    let percentage75Goals = this._extractNumberFromPercentage(teamstats.scoring_minutes_0_15_pct) +
      this._extractNumberFromPercentage(teamstats.scoring_minutes_15_30_pct) +
      this._extractNumberFromPercentage(teamstats.scoring_minutes_30_45_pct) +
      this._extractNumberFromPercentage(teamstats.scoring_minutes_45_60_pct) +
      this._extractNumberFromPercentage(teamstats.scoring_minutes_60_75_pct);

    console.log('75', percentage75Goals);

    return 5 / 100 * percentage75Goals;
  }

  private _extractNumberFromPercentage(percentage) {
    return parseFloat(percentage.replace('%', ''));
  }
}
