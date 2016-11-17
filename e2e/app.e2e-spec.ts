import { RouteGuardPage } from './app.po';

describe('route-guard App', function() {
  let page: RouteGuardPage;

  beforeEach(() => {
    page = new RouteGuardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
