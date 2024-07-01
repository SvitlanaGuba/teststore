class ProductPage {

    constructor() {
        this.productNameElements = ' [class="productname"] .bgnone';
        this.productPrice = '.productprice';
        this.addToCartButton = 'ul[class="productpagecart"]';
    }

    visit() {
        cy.log("Check product page");
        cy.visit('/index.php?rt=product/product&product_id=99');
    }

    getProductNameAfterSearch() {
        return cy.get(this.productNameElements);
    }

    getProductPrice() {
        return cy.get(this.productPrice);
    }

    clickAddToCart() {
        cy.get(this.addToCartButton).click();
    }

    verifyProductDetails(productName1, productPrice) {
        this.getProductNameAfterSearch().should('contain.text', productName1);
        this.getProductPrice().should('contain', productPrice);
    }
}


export default new ProductPage();