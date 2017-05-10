import { SrcAppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('src-app App', () => {
  let page: SrcAppPage;

  beforeEach(() => {
    page = new SrcAppPage();
  });

  // it('should display message saying app works', () => {
  //   page.navigateTo();
  //   //expect(page.getParagraphText()).toEqual('app works!');
  //   browser.findElement(by.name('username')).sendKeys('admin');
  //   browser.findElement(by.name('password')).sendKeys('password');
  // });
});
