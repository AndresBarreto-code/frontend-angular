import { AngularFirstExamplePage } from './app.po';

describe('angular-first-example App', function() {
  let page: AngularFirstExamplePage;

  beforeEach(() => {
    page = new AngularFirstExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
