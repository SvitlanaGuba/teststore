class ShoppingCartPage {
    constructor() {
        this.userProductName = '[class="align_left"] [href="https://automationteststore.com/index.php?rt=product/product&product_id=99&key=99:728efcff89e7bc9a7cab157a7b6b46f5"]';
        this.userProductPrice = '#totals_table td';
        this.flatShippingRate = '#totals_table td';
        this.totalTableSelector = '#totals_table td';
        this.productQuantity = 'input#cart_quantity99728efcff89e7bc9a7cab157a7b6b46f5.form-control.short'//'tr .align_center';
        this.checkoutButton = '#cart_checkout2';
    }

    visit() {
        cy.log("Check SHOPPING CART page");
        cy.visit('/index.php?rt=checkout/cart');
    }

    getProductName() {
        return cy.get(this.userProductName);
    }

    getProductPrice() {
        return cy.get(this.userProductPrice);
    }

    getFlatShippingRate() {
        return cy.get(this.flatShippingRate);
    }

    getTotalPrice() {
        return cy.get(this.totalTableSelector);
    }

    getProductQuantity() {
        return cy.get(this.productQuantity);
    }

    clickCheckoutButton() {
        cy.get(this.checkoutButton).click();
    }


    verifyProductPrice(productName2, productPrice2, productQuantity, flatShippingRate) {
        const expectedTotalPrice = (productPrice2 * productQuantity + flatShippingRate).toFixed(2);

    // cy.get('.productfilneprice').then(price => {
    //     // productPrice has value: \n\t\t\t\t\t\t\t\t\t$29.50\t\t\t\t\t\t\t\t
    //     // line below removes all \n and \t characters from the string and keep only 29.50
    //     productPrice = price.text().replace(/[\n\t]/g, '').replace('$', '');


    this.getProductName().should('contain.text', productName2);
    this.getProductQuantity().should('have.value', productQuantity);
    this.getProductPrice().eq(1).should('contain', productPrice * productQuantity);
    this.getFlatShippingRate().eq(3).should('contain', flatShippingRate.toFixed(2));
    this.getTotalPrice().eq(5).should('contain', expectedTotalPrice);


    }
}

export default new ShoppingCartPage();



