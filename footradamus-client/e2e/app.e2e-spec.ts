import { FootradamusPage } from './app.po';

describe('footradamus App', function() {
  let page: FootradamusPage;

  beforeEach(() => {
    page = new FootradamusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
