import {TestBed} from "@angular/core/testing";
import {HttpModule, Http, BaseRequestOptions} from "@angular/http";
import MatchSelectionService from "./matchSelection.service";
import LogoService from "../logos/clubs/logoDispatcher.service";
import {MockBackend} from "@angular/http/testing";
/**
 * Created by kevinkreuzer on 07.01.17.
 */

describe('Match Selection Service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: 'config', useValue: 'http://testurl.com'},
        LogoService,
        MatchSelectionService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => new Http(mockBackend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('http call', () => {
    expect(true).toBeTruthy();
  });
});
