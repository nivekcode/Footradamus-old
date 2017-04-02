/**
 * Created by kevinkreuzer on 02.04.17.
 */
import PredictionService from './prediction.service';
import {TestBed, inject} from '@angular/core/testing';
import StatisticsService from '../../../statistics/statistics.service';
import {Store} from '@ngrx/store';

describe('Prediction', () => {

    let createPredictionService, getHomeTeamStats, getAwayTeamStats;

    beforeEach(() => {

        getHomeTeamStats = () => ({
            test: 'test'
        });

        getAwayTeamStats = () => ({
            test: 'test'
        });

        let statisticServiceMock = {}
        let storeMock = {};
        TestBed.configureTestingModule({
            providers: [PredictionService,
                {provide: StatisticsService, useValue: statisticServiceMock},
                {provide: Store, useValue: storeMock}
            ]
        });
    })

    it('must be true', () => {
        inject([PredictionService], (sut) => {
            //when
            expect(true).toBeTruthy();
        });
    });
});