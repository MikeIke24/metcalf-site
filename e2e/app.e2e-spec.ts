import { MetcalfPage } from './app.po';

describe('metcalf App', () => {
  let page: MetcalfPage;

  beforeEach(() => {
    page = new MetcalfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
