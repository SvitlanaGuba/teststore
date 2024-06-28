import user from '../fixtures/user.json';
import {faker} from '@faker-js/faker';
import homePage from '../support/pages/HomePage';
import loginPage from "../support/pages/LoginPage";
import accountPage from "../support/pages/AccountPage";
import createAccountPage from "../support/pages/CreateAccountPage";
import successPage from "../support/pages/SuccessPage";


user.loginname = faker.internet.userName();
user.email = faker.internet.email();
user.fax = '12412341234';
user.address1 = faker.location.streetAddress();
user.address2 = faker.location.secondaryAddress();
user.address2 = faker.location.zipCode();
user.telephone = faker.phone.number();


describe('Registration positive test suite', () => {

  beforeEach(() => {
    cy.log("Open account/login page");

    homePage.visit();
    homePage.clickLoginOrRegisterButton();


  })


  it('Registration with valid data', () => {

    cy.log("Open account/create page");
    loginPage.clickContinueButton();

    cy.log("Fill in the form");
    createAccountPage.typeUserFirstName();
    createAccountPage.typeUserLastName();
    createAccountPage.typeUserEmail();
    createAccountPage.typeUserPhone();
    createAccountPage.typeUserFax();
    createAccountPage.typeUserCompany();
    createAccountPage.typeUserAddress1();
    createAccountPage.typeUserAddress2();
    createAccountPage.typeUserCity();
    createAccountPage.selectUserCountry();
    createAccountPage.typeUserPostCode();
    createAccountPage.selectUserZone();
    createAccountPage.typeUserLoginName();
    createAccountPage.typeUserPassword();
    createAccountPage.typeUserPasswordConfirm();

    cy.log("Submit the form");
    createAccountPage.checkSubscribeRadioButton();
    createAccountPage.checkPrivacyPolicyButton();
    createAccountPage.clickContinueButton();

    cy.log("Verify registration");
    successPage.checkMainText();
    successPage.clickContinueButton()

  })

})


describe('Registration negative test suite', () => {
  beforeEach(() => {
    cy.log("Open account/login page");
    homePage.visit();
    homePage.clickLoginOrRegisterButton();
    loginPage.clickContinueButton();
  });


  it('Registration with valid data', () => {


    cy.log("Fill in the form");
    createAccountPage.typeUserFirstName();
    createAccountPage.typeUserLastName();

    createAccountPage.typeUserPhone();
    createAccountPage.typeUserFax();
    createAccountPage.typeUserCompany();
    createAccountPage.typeUserAddress1();
    createAccountPage.typeUserAddress2();
    createAccountPage.typeUserCity();
    createAccountPage.selectUserCountry();
    createAccountPage.typeUserPostCode();
    createAccountPage.selectUserZone();
    createAccountPage.typeUserLoginName();
    createAccountPage.typeUserPassword();
    createAccountPage.typeUserPasswordConfirm();

    cy.log("Submit the form");
    createAccountPage.checkSubscribeRadioButton();
    createAccountPage.checkPrivacyPolicyButton();
    createAccountPage.clickContinueButton();

    createAccountPage.checkErrorMessage()
  })

})
