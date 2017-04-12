import { ClioMuseWebPage } from './app.po';

describe('clio-muse-web App', () => {
  let page: ClioMuseWebPage;

  beforeEach(() => {
    page = new ClioMuseWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
