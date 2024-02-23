describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.flipkart.com/')
      
      
      cy.contains('Search Icon').click()
      cy.get('[placeholder="Search for Products, Brands and More"]').type('baby girl dress')
      
    })
  })