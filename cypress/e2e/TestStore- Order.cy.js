import user from "../fixtures/user.json"
import homePage from '../support/pages/HomePage';
import loginPage from "../support/pages/LoginPage";
import accountPage from "../support/pages/AccountPage";
import productPage from "../support/pages/ProductPage";
import shoppingCartPage from "../support/pages/ShoppingCartPage";
import checkoutConfirmationPage from "../support/pages/CheckoutConfirmationPage";

//cy.log("In the Header - Login Or Register");

beforeEach(() => {
  homePage.visit();
  homePage.clickLoginOrRegisterButton();
})


//cy.log("ACCOUNT LOGIN page");

it('Successful authorization', () => {
  loginPage.fillLoginForm(user.loginname, user.password);
  loginPage.clickLoginButton();
  accountPage.getFirstNameText().should('have.text', user.firstname);
})

//cy.log("Find product");

it('Search for product "Fluid shine nail polish"', () => {
  const productName = "Fluid shine nail polish";

  accountPage.searchForProduct(productName);

})
//cy.log("Check product page");

it('Verify product', () => {
  const productName1 = "Fluid shine nail polish";
  const productPrice = "$137.00";

  productPage.verifyProductDetails(productName1, productPrice);
  productPage.clickAddToCart();

})

//cy.log("Check SHOPPING CART page");

it('Search for product, verify details, and add to cart', () => {
  const productName2 = "Fluid shine nail polish";
  const productQuantity = 2;
  const productPrice2 = "$137.00";
  const flatShippingRate = 2.00;

  shoppingCartPage.getProductPrice().then(productPrice => {
    shoppingCartPage.verifyProductPrice(productName2, productPrice2, productQuantity);
    shoppingCartPage.clickCheckoutButton();
  })
})
//cy.log("Check Checkout Confirmation page");
it('', () => {

  checkoutConfirmationPage.checkCheckoutText();

})