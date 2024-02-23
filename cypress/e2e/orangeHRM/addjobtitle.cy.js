describe('verify add job title functionality', ()=>{
    it('verify adding add job title', () => {
        cy.visit(Cypress.env('endpoint'))
        //cy.wait(20000)
        
        cy.get('[name="username"]').type(Cypress.env('username'))
        cy.get('[type="password"]').type(Cypress.env('password'))
        cy.get('[type="submit"]').click()
        cy.contains('Time at Work').should('be.visible')
        // or
        cy.contains('Dashboard').should('be.visible')
        cy.contains('Admin').click()
        cy.contains('Job').click()
        cy.contains('Job Titles').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        let randomtext = (Math.random() + 1).toString(36).substring(7);
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type("QA Engineering 111" + randomtext)
        cy.get('[placeholder="Type description here"]').type("Testing Activities")
        cy.get('button[type="submit"]').click()
        cy.contains('Successfully Saved').should('be.visible')
    })
})