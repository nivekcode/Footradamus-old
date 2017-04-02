/**
 * Created by kevinkreuzer on 16.11.16.
 */

import {Injectable} from "@angular/core";
import StatisticService from "./statstics.service";
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";
import match from "../../../shared/model/match.model";
import {Matchresult, NO_WINNER} from '../model/results.model';

@Injectable()
export default class PredictionService {

    public $winner: Subject<string> = new Subject<string>();

    constructor(private statsService: StatisticService, private store: Store<match>) {
        this.statsService.$teamStats
            .subscribe(stats => {
                    let homeTeamStats = stats[0].json().statistics[0];
                    let awayTeamStats = stats[1].json().statistics[0];
                    let matchResult = this.predictResult(homeTeamStats, awayTeamStats);
                    this.streamResult(matchResult);
                }
            );
    }

    private streamResult(matchResult: Matchresult): void {
        if (matchResult === Matchresult.DRAW) {
            this.$winner.next(NO_WINNER);
        }
        else {
            this.store.select('match')
                .subscribe((match: match) => {
                    this.$winner.next(matchResult === Matchresult.HOMETEAM_WIN ? match.homeTeam.name : match.awayTeam.name);
                })
                .unsubscribe();
        }
    }

    private predictResult(homeTeamStats, awayTeamStats): Matchresult {
        let homeTeamPoints = this.getPointsForTeam(homeTeamStats, true);
        let awayTeamPoints = this.getPointsForTeam(awayTeamStats, false);
        return this.getMatchResult(homeTeamPoints, awayTeamPoints);
    }

    private getMatchResult(homeTeamPoints: number, awayTeamPoints: number): Matchresult {
        if (homeTeamPoints === awayTeamPoints) {
            return Matchresult.DRAW;
        }
        if (homeTeamPoints > awayTeamPoints) {
            return Matchresult.HOMETEAM_WIN;
        }
        return Matchresult.AWAYTEAM_WIN;
    }

    private getPointsForTeam(teamstats, isHomeTeam: boolean): number {
        let points: number = 0;
        points += this._getWinLosDiff(teamstats);
        points += isHomeTeam ? this._getHomeWinnLosDiff(teamstats) : this._getAwayWinnLosDiff(teamstats);
        points += this._getCleanSheets(teamstats);
        points += isHomeTeam ? this._getHomeCleanSheets(teamstats) : this._getAwayCleanSheets(teamstats);
        points += this._getGoalDiff(teamstats);
        points += isHomeTeam ? this._getHomeGoalsDiff(teamstats) : this._getAwayGoalsDiff(teamstats);
        points += this._getFirstHalfGoals(teamstats);
        points += this._getFirst75MinutesGoals(teamstats);

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
        return 5 / 100 * percentageFHGoals;
    }

    private _getFirst75MinutesGoals(teamstats) {
        let percentage75Goals = this._extractNumberFromPercentage(teamstats.scoring_minutes_0_15_pct) +
            this._extractNumberFromPercentage(teamstats.scoring_minutes_15_30_pct) +
            this._extractNumberFromPercentage(teamstats.scoring_minutes_30_45_pct) +
            this._extractNumberFromPercentage(teamstats.scoring_minutes_45_60_pct) +
            this._extractNumberFromPercentage(teamstats.scoring_minutes_60_75_pct);
        return 5 / 100 * percentage75Goals;
    }

    private _extractNumberFromPercentage(percentage) {
        return parseFloat(percentage.replace('%', ''));
    }
}
