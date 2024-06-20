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
    cy.get('#filter_keyword').type('i').closest('form').submit();
    cy.get('body').then((body)=>{
        if (body.find(`[title="${productName}"]`).length > 0) {
            cy.get('[title="${productName}"]').click();
        }

    else {
                cy.get('ul.pagination li a').contains('>').click();
                findProduct(productName);
            }
        })
    }




export function findNewProd(productName) {
    cy.get('#filter_keyword').type('i').closest('form').submit();
    cy.get('ul.pagination a').then(pages => {
        return pages.length
    }).then(pageCount =>{
        for (let i =0; i<pageCount; i++) {
            cy.location().then(location =>{
                if(!location.search.includes('product/product')) {
                    cy.get('body').then(body =>{
                        if(body.find(`.productname[title="${productName}"]`).length>0) {
                            cy.get('.productname[title="${productName}"]').click();
                        } else {
                            cy.get('ul.pagination a').contains('>').click();
                        }
                    })
                }
            })
        }
    })
}