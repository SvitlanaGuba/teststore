import user from "../fixtures/user.json"
import { login, findProduct } from "../support/helper.js";


beforeEach(() => {
  login(user.loginname, user.password);
});


describe('Order product through site search', () => {
  it('Search by letter and find product', () => {
    const productName = "Fluid shine nail polish";

    cy.log("Search by letter");
    cy.visit('/');

    cy.get('#filter_keyword[placeholder="Search Keywords"]').type('E');
    cy.get('div.button-in-search').click();

    findProduct(productName);

  });
});

//helperExample code
// it('Homework', ()=>{
//   cy.visit('/');
//   cy.get('filter_keyword').type('i').closest('form').submit();

//   findProduct('Fluid shine nail polish');
// })
