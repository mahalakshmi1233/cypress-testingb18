import data from '../../fixtures/pim/login1.json'

describe('trello login', () => {

    it('trello login functionality', () => {
      cy.visit('https://trello.com/')
     // cy.contains('Sign up - it’s free!').click()
      cy.contains('Log in').click()
     
      cy.origin('https://id.atlassian.com',() =>{
      
        
        cy.get('#username').type("mahalakshmis114@gmail.com")
        cy.contains('Continue').click()
      
        cy.get('input[name="password"]').type("Test@123#45")
        cy.get('#login-submit').click()
       
        // cy.contains('Google').click()
       
       // cy.contains('mahalakshmis114@gmail.com').click()
        })
      })
    })
