describe('Checkboxes', () => {
 
 
 
 it('Hover and Validate Text using trigger(\'mouseover\')', () =>{
    cy.visit('https://www.amazon.com/')
    cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover')
    cy.contains('Create a List').click()
    cy.url().should('include','wishlist/intro')
 })
it.only('add to the carts',  ()=> {
cy.visit('https://www.amazon.com/');
cy.get('#twotabsearchtextbox').type('iphones{enter}')
cy.get('img[class="s-image"]').first().click()
cy.contains('Add to Cart').click()
cy.get('span[class="nav-cart-icon nav-sprite"]').should('be.visible')

})})