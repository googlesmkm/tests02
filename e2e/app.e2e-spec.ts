import { CspAppPage } from './app.po';

describe('csp-app App', () => {
  let page: CspAppPage;

  beforeEach(() => {
    page = new CspAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
