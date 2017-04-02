/**
 * Created by kevinkreuzer on 07.01.17.
 */
import {TestBed, inject} from "@angular/core/testing";
import {HttpModule, Http, BaseRequestOptions, ResponseOptions, Response} from "@angular/http";
import MatchSelectionService from "./matchSelection.service";
import {MockBackend} from "@angular/http/testing";
import LogoService from "../../shared/service/logo.service";

describe('Match Selection Service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {provide: 'config', useValue: 'http://unitTest:3000/'},
        LogoService,
        MatchSelectionService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => new Http(mockBackend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions
      ]
    })
    ;
  });

  it('should get the leagues and filter them to Bundesliga, Premier League and Primera Division',
    inject([MatchSelectionService, MockBackend], (sut, mockBackend) => {
      let expectedLeague = {id: '1399', name: 'Primera División', region: 'Spain'};

      const mockResponse = [
        {
          "id": "1399",
          "name": "Primera División",
          "region": "Spain"
        },
        {
          "id": "1408",
          "name": "Super League",
          "region": "Switzerland"
        },
        {
          "id": "1425",
          "name": "Süper Lig",
          "region": "Turkey"
        }
      ];

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      sut.getLeagues()
        .subscribe(res => {
          let actualLeague = res[0];
          expect(expectedLeague).toEqual(actualLeague);
        });
    }));
});
