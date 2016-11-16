/**
 * Created by kevinkreuzer on 10.11.16.
 */

import TeamSelectionService from "./teamSelection.service";

describe('TeamSelection Service Test', () => {

  let createService;

  beforeEach(() => {
    createService = () => new TeamSelectionService(null);
  });

  it('should create the correct logo url', () => {
    //given
    let sut = createService();

    //when
    let logoUrl = sut._createLogoUrl('Chelsea');

    //then
    expect(logoUrl).toBe('https://hdlogo.files.wordpress.com/2011/08/chelsea-logo.png');
  })

});
