class CheckoutConfirmationPage {

    constructor() {
        this.checkoutText = 'span.maintext';

    }

    visit() {
        cy.log("Check Checkout Confirmation page");
        cy.visit('/index.php?rt=checkout/confirm');
    }

    getCheckoutText() {
        return cy.get(this.checkoutText);
    }


    checkCheckoutText() {
        this.getCheckoutText().should('have.text', 'Checkout Confirmation');
    }

}


export default new CheckoutConfirmationPage();