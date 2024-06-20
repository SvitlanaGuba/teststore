import user from "../fixtures/user.json";

export function login(loginName, password) {
    cy.log("Open home page");
    cy.visit('https://automationteststore.com/');

    cy.log("Open account/login page");
    cy.get('#customer_menu_top').click();

    cy.log("Fill login form");
    cy.get('#loginFrm_loginname').type(loginName);
    cy.get('#loginFrm_password').type(password);
    cy.get('[title="Login"]').click();

    cy.log('Verify account/account page');
    cy.get('.subtext').should('contain', user.firstname);
}

export function findProduct(productName) {
    cy.get('body').then((body) => {
        if (body.find(`[title="${productName}"]`).length > 0) {
            cy.contains(productName).click();
            cy.get('.product-product').should('contain', productName);

        } else {

            cy.get('.pagination li a').contains('>').click();
            findProduct(productName);
        }
    });
}
