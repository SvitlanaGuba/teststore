import user from "../../fixtures/user.json";

class SuccessPage {

    constructor() {
        this.mainText = '.maintext';
        this.continueButton = '[title="Continue"]';
    }

    visit() {
        cy.log("Open page after registration");
        cy.visit('/index.php?rt=account/success');
    }

    getMainText() {
        return cy.get(this.mainText);
    }

    getContinueButton() {
        return cy.get(this.continueButton);
    }

    checkMainText() {
        this.getMainText().should('contain', 'Your Account Has Been Created!');
    }

    clickContinueButton() {
        this.getContinueButton().click();
    }
}

export default new SuccessPage();

