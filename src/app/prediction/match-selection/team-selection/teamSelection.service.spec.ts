/**
 * Created by kevinkreuzer on 10.11.16.
 */

import TeamSelectionService from "./teamSelection.service";
import {TestBed, inject} from "@angular/core/testing";
import {Http, BaseRequestOptions, XHRBackend, HttpModule} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {FormsModule} from "@angular/forms";

describe('TeamSelection Service Test', () => {
  beforeEach(() => {
    let myMockConfig = {
      backendUrl: 'http://test.com/',
      authParam: '?blub'
    }
    TestBed.configureTestingModule({
      providers: [TeamSelectionService, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        { provide: 'config', useValue: myMockConfig }
      ],
      imports: [FormsModule, HttpModule]
    });
    TestBed.compileComponents();
  });

  it('should create the correct logo url',
    inject([TeamSelectionService], (sut) => {
    //when
    let logoUrl = sut._createLogoUrl('Chelsea');
    //then
    expect(logoUrl).toBe('https://hdlogo.files.wordpress.com/2013/11/chelsea.png');
  }));
});
