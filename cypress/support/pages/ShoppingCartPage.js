class ShoppingCartPage {
    constructor() {
        this.userProductName = 'tr [class="image"]';
        this.userProductPrice = '#totals_table td';
        this.flatShippingRate = '#totals_table td';
        this.totalTableSelector = '#totals_table td';
        this.productQuantity= 'tr .align_center';
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


    verifyProductPrice(productName2, productPrice2, productQuantity) {
        const expectedTotalPrice = (productPrice2 * productQuantity + flatShippingRate).toFixed(2);

        this.getProductName().should('contain.text', productName2);
        this.getProductQuantity().eq(1).should('contain', productQuantity);
        this.getProductPrice.eq(1).should('contain', productPrice * productQuantity);
        this.getFlatShippingRate().eq(3).should('contain', '$2.00');
        this.getTotalPrice().eq(5).should('contain', expectedTotalPrice);
    }
}

export default new ShoppingCartPage();