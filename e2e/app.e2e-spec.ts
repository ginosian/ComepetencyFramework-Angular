import { CompetencyFrameworkPage } from './app.po';

describe('competency-framework App', function() {
  let page: CompetencyFrameworkPage;

  beforeEach(() => {
    page = new CompetencyFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
