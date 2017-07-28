import { OrderAngularPage } from './app.po';

describe('order-angular App', function() {
  let page: OrderAngularPage;

  beforeEach(() => {
    page = new OrderAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
