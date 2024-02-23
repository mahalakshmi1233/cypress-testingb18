///<reference types="cypress"/>

describe('Automation - Working With Tabs in webpage', function () {

    it('Cypress Test Case - Understanding Tabs in webpage', function () {
  
  
      Cypress.on("uncaught:exception", (err, runnable) => {
  
        return false;
      });
  
  
      cy.visit('https://www.cypress.io/');
  
      cy.wait(5000);
  
      cy.contains('Installing Cypress').invoke("removeAttr", "target").click({force: true})
      cy.wait(5000);
      cy.reload()
  
      cy.url().should('include', 'https://docs.cypress.io/guides/getting-started/installing-cypress')
  

     // ================================================
     
      //  cy.go(-1) // backword
  
      //  cy.go(1) //forward
  
    })
  
  })
  

  //