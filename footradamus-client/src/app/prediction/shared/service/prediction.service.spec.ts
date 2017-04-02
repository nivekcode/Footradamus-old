/**
 * Created by kevinkreuzer on 02.04.17.
 */
import PredictionService from './prediction.service';
import {TestBed, inject, async} from '@angular/core/testing';
import {Store} from '@ngrx/store';
import {Matchresult} from '../model/results.model';
import StatisticService from './statstics.service';
import {Observable} from 'rxjs';

describe('Prediction', () => {

    let getHomeTeamStats, getAwayTeamStats;

    beforeEach(() => {

        getHomeTeamStats = () => ({
            'rank': '1',
            'wins': '12',
            'wins_home': '7',
            'wins_away': '5',
            'draws': '1',
            'draws_home': '0',
            'draws_away': '1',
            'losses': '2',
            'losses_home': '1',
            'losses_away': '1',
            'clean_sheets': '8',
            'clean_sheets_home': '5',
            'clean_sheets_away': '3',
            'goals': '33',
            'goals_home': '21',
            'goals_away': '12',
            'goals_conceded': '11',
            'goals_conceded_home': '4',
            'goals_conceded_away': '7',
            'avg_goals_per_game_scored': '2.2',
            'avg_goals_per_game_scored_home': '2.62',
            'avg_goals_per_game_scored_away': '1.71',
            'avg_goals_per_game_conceded': '0.73',
            'avg_goals_per_game_conceded_home': '0.50',
            'avg_goals_per_game_conceded_away': '1.00',
            'avg_first_goal_scored': '37m',
            'avg_first_goal_scored_home': '33m',
            'avg_first_goal_scored_away': '44m',
            'avg_first_goal_conceded': '38m',
            'avg_first_goal_conceded_home': '35m',
            'avg_first_goal_conceded_away': '41m',
            'failed_to_score': '1',
            'failed_to_score_home': '0',
            'failed_to_score_away': '1',
            'biggest_defeat': '',
            'biggest_defeat_home': '',
            'biggest_defeat_away': '',
            'scoring_minutes_0_15_pct': '12.1%',
            'scoring_minutes_0_15_cnt': '4',
            'scoring_minutes_15_30_pct': '12.1%',
            'scoring_minutes_15_30_cnt': '4',
            'scoring_minutes_30_45_pct': '12.1%',
            'scoring_minutes_30_45_cnt': '4',
            'scoring_minutes_45_60_pct': '15.2%',
            'scoring_minutes_45_60_cnt': '5',
            'scoring_minutes_60_75_pct': '24.2%',
            'scoring_minutes_60_75_cnt': '8',
            'scoring_minutes_75_90_pct': '24.2%',
            'scoring_minutes_75_90_cnt': '8'
        });

        getAwayTeamStats = () => ({
            'rank': '5',
            'wins': '7',
            'wins_home': '5',
            'wins_away': '2',
            'draws': '6',
            'draws_home': '2',
            'draws_away': '4',
            'losses': '2',
            'losses_home': '0',
            'losses_away': '2',
            'clean_sheets': '6',
            'clean_sheets_home': '4',
            'clean_sheets_away': '2',
            'goals': '24',
            'goals_home': '14',
            'goals_away': '10',
            'goals_conceded': '11',
            'goals_conceded_home': '4',
            'goals_conceded_away': '7',
            'avg_goals_per_game_scored': '1.6',
            'avg_goals_per_game_scored_home': '2.00',
            'avg_goals_per_game_scored_away': '1.25',
            'avg_goals_per_game_conceded': '0.73',
            'avg_goals_per_game_conceded_home': '0.57',
            'avg_goals_per_game_conceded_away': '0.88',
            'avg_first_goal_scored': '49m',
            'avg_first_goal_scored_home': '54m',
            'avg_first_goal_scored_away': '43m',
            'avg_first_goal_conceded': '42m',
            'avg_first_goal_conceded_home': '38m',
            'avg_first_goal_conceded_away': '45m',
            'failed_to_score': '2',
            'failed_to_score_home': '0',
            'failed_to_score_away': '2',
            'biggest_defeat': '-',
            'biggest_defeat_home': '-',
            'biggest_defeat_away': '',
            'scoring_minutes_0_15_pct': '12.5%',
            'scoring_minutes_0_15_cnt': '3',
            'scoring_minutes_15_30_pct': '4.2%',
            'scoring_minutes_15_30_cnt': '1',
            'scoring_minutes_30_45_pct': '16.7%',
            'scoring_minutes_30_45_cnt': '4',
            'scoring_minutes_45_60_pct': '33.3%',
            'scoring_minutes_45_60_cnt': '8',
            'scoring_minutes_60_75_pct': '12.5%',
            'scoring_minutes_60_75_cnt': '3',
            'scoring_minutes_75_90_pct': '20.8%',
            'scoring_minutes_75_90_cnt': '5'
        });

        let statisticServiceMock = {
            $teamStats: Observable.empty()
        }
        let storeMock = {};
        TestBed.configureTestingModule({
            providers: [PredictionService,
                {provide: StatisticService, useValue: statisticServiceMock},
                {provide: Store, useValue: storeMock}
            ]
        });
    });

    it('Chelsea should win over totenham', inject([PredictionService], (sut) => {
        //given
        let homeTeamStats = getHomeTeamStats();
        let awayTeamStats = getAwayTeamStats();
        //when
        let predictedResult = sut.predictResult(homeTeamStats, awayTeamStats);
        //then
        expect(predictedResult).toBe(Matchresult.HOMETEAM_WIN);
    }));
});