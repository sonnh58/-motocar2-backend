import { SrcAppPage } from './app.po';

describe('src-app App', () => {
  let page: SrcAppPage;

  beforeEach(() => {
    page = new SrcAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
