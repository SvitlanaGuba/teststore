
import user from "../../fixtures/user.json";

class CreateAccountPage {

    constructor() {

        this.userFirstName = '#AccountFrm_firstname';
        this.userLastName ='#AccountFrm_lastname';
        this.userEmail = '#AccountFrm_email';
        this.userPhone ='#AccountFrm_telephone';
        this.userFax ='#AccountFrm_fax';
        this.userCompany ='#AccountFrm_company';
        this.userAddress1 = '#AccountFrm_address_1';
        this.userAddress2 ='#AccountFrm_address_2';
        this.userCity ='#AccountFrm_city';
        this.userCountry ='#AccountFrm_country_id';
        this.userPostCode ='#AccountFrm_postcode';
        this.userZone = '#AccountFrm_zone_id';
        this.userLoginName ='#AccountFrm_loginname';
        this.userPassword ='#AccountFrm_password';
        this.userPasswordConfirm ='#AccountFrm_confirm'

        this.subscribeRadioButton = '#AccountFrm_newsletter0';
        this.privacyPolicyButton = '#AccountFrm_agree';
        this.continueButton = '[title="Continue"]';

        this.errorMessage = '#maincontainer [class="alert alert-error alert-danger"]';

    }

    visit() {
        cy.log("Open Create Account pagr");
        cy.visit('/index.php?rt=account/create');
    }

    getUserFirstName() {
        return cy.get(this.userFirstName);
    }

    getUserLastName() {
        return cy.get(this.userLastName);
    }

    getUserEmail() {
        return cy.get(this.userEmail);
    }

    getUserPhone() {
        return cy.get(this.userPhone);
    }

    getUserFax() {
        return cy.get(this.userFax);
    }

    getUserCompany() {
        return cy.get(this.userCompany);
    }

    getUserAddress1() {
        return cy.get(this.userAddress1);
    }

    getUserAddress2() {
        return cy.get(this.userAddress2);
    }


    getUserCity() {
        return cy.get( this.userCity);
    }

    getUserCountry() {
        return cy.get( this.userCountry);
    }

    getUserPostCode() {
        return cy.get( this.userPostCode);
    }


    getUserZone() {
        return cy.get( this.userZone);
    }

    getUserLoginName() {
        return cy.get(this.userLoginName);

    }

    getUserPassword() {
        return cy.get(this.userPassword);
    }


    getUserPasswordConfirm() {
        return cy.get(this.userPasswordConfirm);
    }


    getSubscribeRadioButton() {
        return cy.get(this.subscribeRadioButton);
    }


    getPrivacyPolicyButton() {
        return cy.get(this.privacyPolicyButton);
    }

    getContinueButton() {
        return cy.get(this.continueButton);
    }


    typeUserFirstName(){
        this.getUserFirstName().type(user.firstname);
    }

    typeUserLastName(){
        this.getUserLastName().type(user.lastname);
    }

    typeUserEmail(){
        this.getUserEmail().type(user.email);
    }

    typeUserPhone(){
        this.getUserPhone().type(user.telephone);
    }

    typeUserFax(){
        this.getUserFax().type(user.fax);
    }

    typeUserCompany(){
        this.getUserCompany().type(user.company);
    }

    typeUserAddress1(){
        this.getUserAddress1().type(user.address1);
    }

    typeUserAddress2(){
        this.getUserAddress2().type(user.address2);
    }

    typeUserCity(){
        this.getUserCity().type(user.city);
    }


    selectUserCountry(){
        this.getUserCountry().select(user.country);
    }

    typeUserPostCode(){
        this.getUserPostCode().type(user.postcode);
    }


    selectUserZone(){
        this.getUserZone().select(user.zone);
    }

    typeUserLoginName(){
        this.getUserLoginName().type(user.loginname);
    }

    typeUserPassword(){
        this.getUserPassword().type(user.password);
    }

    typeUserPasswordConfirm(){
        this.getUserPasswordConfirm().type(user.password);
    }

    checkSubscribeRadioButton() {
        this.getSubscribeRadioButton().check();
    }

    checkPrivacyPolicyButton() {
        this.getPrivacyPolicyButton().check();
    }

    clickContinueButton() {
        this.getContinueButton().click();
    }

    checkErrorMessage() {
        cy.get(this.errorMessage).should('have.text', 'Email Address does not');
    }
}


export default new CreateAccountPage();