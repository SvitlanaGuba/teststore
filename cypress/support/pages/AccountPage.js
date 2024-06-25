class AccountPage {

    constructor() {
        this.firstNameText = '.subtext';
        this.searchField = '#filter_keyword[placeholder="Search Keywords"]'
        this.searchButton = 'div .button-in-search';
    }

    visit() {
        cy.log("Open account page");
        cy.visit('/index.php?rt=account/account');
    }

    getFirstNameText() {
        return cy.get(this.firstNameText);
    }

    getSearchField() {
        return cy.get(this.searchField);
    }

    getSearchButton() {
        return cy.get(this.searchButton);
    }

    fillSearchField(productName) {
        this.getSearchField().type(productName);
    }

    clickSearchButton() {
        this.getSearchButton().click();
    }

    searchForProduct(productName) {
        this.fillSearchField(productName);
        this.clickSearchButton();
    }
}


export default new AccountPage();