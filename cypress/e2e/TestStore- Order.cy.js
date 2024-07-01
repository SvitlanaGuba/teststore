import user from "../fixtures/user.json"
import homePage from '../support/pages/HomePage';
import loginPage from "../support/pages/LoginPage";
import accountPage from "../support/pages/AccountPage";
import productPage from "../support/pages/ProductPage";
import shoppingCartPage from "../support/pages/ShoppingCartPage";
import checkoutConfirmationPage from "../support/pages/CheckoutConfirmationPage"


describe('Create order - positive test suite', () => {

  it('Create order', () => {
    cy.log("Login Or Register Button");
    homePage.visit();
    homePage.clickLoginOrRegisterButton();

    cy.log("ACCOUNT LOGIN page");
    loginPage.fillLoginForm(user.loginname, user.password);
    loginPage.clickLoginButton();

    cy.log("Find product");
    const productName = "Fluid shine nail polish";
    accountPage.searchForProduct(productName);

    cy.log("Check product page");
    const productName1 = "Fluid shine nail polish";
    const productPrice = "$137.00";

    productPage.verifyProductDetails(productName1, productPrice);
    productPage.clickAddToCart();

    cy.log("Check SHOPPING CART page");
    const productName2 = "Fluid shine nail polish";
    const productQuantity = 29;
    const productPrice2 = 137.00;
    const flatShippingRate = 2.00;


    shoppingCartPage.getProductPrice().then(productPrice => {
      shoppingCartPage.verifyProductPrice(productName2, productPrice2, productQuantity, flatShippingRate );
      shoppingCartPage.clickCheckoutButton();
    })


    cy.log("Check Checkout Confirmation page");
    checkoutConfirmationPage.checkCheckoutText();

  })
})