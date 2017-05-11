import { CroustiPage } from './app.po';

describe('crousti App', () => {
  let page: CroustiPage;

  beforeEach(() => {
    page = new CroustiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
