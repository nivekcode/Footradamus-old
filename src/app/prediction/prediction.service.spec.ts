/**
 * Created by kevinkreuzer on 28.11.16.
 */

import PredictionService from './prediction.service';
import {TestBed, inject} from "@angular/core/testing";
import StatisticService from "./statstics.service";

describe('Prediction Service', () => {
  beforeEach(() => {
    let statisticServiceMock = {
      $stats: {
        subscribe: () => {}
      }
    }
    TestBed.configureTestingModule({
      providers:[PredictionService, { provide: StatisticService, useValue: statisticServiceMock }]
    });
  });

  it('Must detect a win from Chelsea the leader vs Sunderland the taillight',
    inject([PredictionService], (sut) => {
    //given
    let chelseaStats = {
      "rank": "1",
      "wins": "9",
      "wins_home": "5",
      "wins_away": "4",
      "draws": "1",
      "draws_home": "0",
      "draws_away": "1",
      "losses": "2",
      "losses_home": "1",
      "losses_away": "1",
      "clean_sheets": "7",
      "clean_sheets_home": "4",
      "clean_sheets_away": "3",
      "goals": "27",
      "goals_home": "18",
      "goals_away": "9",
      "goals_conceded": "9",
      "goals_conceded_home": "3",
      "goals_conceded_away": "6",
      "avg_goals_per_game_scored": "2.25",
      "avg_goals_per_game_scored_home": "3.00",
      "avg_goals_per_game_scored_away": "1.50",
      "avg_goals_per_game_conceded": "0.75",
      "avg_goals_per_game_conceded_home": "0.50",
      "avg_goals_per_game_conceded_away": "1.00",
      "avg_first_goal_scored": "31m",
      "avg_first_goal_scored_home": "24m",
      "avg_first_goal_scored_away": "41m",
      "avg_first_goal_conceded": "43m",
      "avg_first_goal_conceded_home": "47m",
      "avg_first_goal_conceded_away": "41m",
      "failed_to_score": "1",
      "failed_to_score_home": "0",
      "failed_to_score_away": "1",
      "biggest_defeat": "",
      "biggest_defeat_home": "",
      "biggest_defeat_away": "",
      "scoring_minutes_0_15_pct": "14.8%",
      "scoring_minutes_0_15_cnt": "4",
      "scoring_minutes_15_30_pct": "14.8%",
      "scoring_minutes_15_30_cnt": "4",
      "scoring_minutes_30_45_pct": "14.8%",
      "scoring_minutes_30_45_cnt": "4",
      "scoring_minutes_45_60_pct": "11.1%",
      "scoring_minutes_45_60_cnt": "3",
      "scoring_minutes_60_75_pct": "22.2%",
      "scoring_minutes_60_75_cnt": "6",
      "scoring_minutes_75_90_pct": "22.2%",
      "scoring_minutes_75_90_cnt": "6"
    };
    let sunderlandStats = {
      "rank": "2",
      "wins": "8",
      "wins_home": "4",
      "wins_away": "4",
      "draws": "3",
      "draws_home": "1",
      "draws_away": "2",
      "losses": "1",
      "losses_home": "0",
      "losses_away": "1",
      "clean_sheets": "2",
      "clean_sheets_home": "1",
      "clean_sheets_away": "1",
      "goals": "30",
      "goals_home": "17",
      "goals_away": "13",
      "goals_conceded": "14",
      "goals_conceded_home": "4",
      "goals_conceded_away": "10",
      "avg_goals_per_game_scored": "2.5",
      "avg_goals_per_game_scored_home": "3.40",
      "avg_goals_per_game_scored_away": "1.86",
      "avg_goals_per_game_conceded": "1.17",
      "avg_goals_per_game_conceded_home": "0.80",
      "avg_goals_per_game_conceded_away": "1.43",
      "avg_first_goal_scored": "28m",
      "avg_first_goal_scored_home": "19m",
      "avg_first_goal_scored_away": "35m",
      "avg_first_goal_conceded": "43m",
      "avg_first_goal_conceded_home": "61m",
      "avg_first_goal_conceded_away": "32m",
      "failed_to_score": "3",
      "failed_to_score_home": "1",
      "failed_to_score_away": "2",
      "biggest_defeat": "-",
      "biggest_defeat_home": "-",
      "biggest_defeat_away": "",
      "scoring_minutes_0_15_pct": "3.3%",
      "scoring_minutes_0_15_cnt": "1",
      "scoring_minutes_15_30_pct": "20.0%",
      "scoring_minutes_15_30_cnt": "6",
      "scoring_minutes_30_45_pct": "30.0%",
      "scoring_minutes_30_45_cnt": "9",
      "scoring_minutes_45_60_pct": "23.3%",
      "scoring_minutes_45_60_cnt": "7",
      "scoring_minutes_60_75_pct": "13.3%",
      "scoring_minutes_60_75_cnt": "4",
      "scoring_minutes_75_90_pct": "10.0%",
      "scoring_minutes_75_90_cnt": "3"
    };

    //when
    let willHomeTeamWin = sut._predictResult(chelseaStats, sunderlandStats);

    //then
    expect(willHomeTeamWin).toBeTruthy();
  }));

  it('Must return a percentage as a number',
    inject([PredictionService], (sut) => {
      //when
      let actualNumber = sut._extractNumberFromPercentage('9.1%');
      //then
      expect(actualNumber).toBe(9.1);
  }));
});
