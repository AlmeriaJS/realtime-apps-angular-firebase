import { LiveDemoPage } from './app.po';

describe('live-demo App', () => {
  let page: LiveDemoPage;

  beforeEach(() => {
    page = new LiveDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
