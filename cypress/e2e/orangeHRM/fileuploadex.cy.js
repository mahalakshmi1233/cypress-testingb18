///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it.only('Cypress Test Case - Understanding upload file- Attachfile', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.get('input[name="upfile"]').attachFile('upload/sample.txt');
      
      cy.wait(3000)
      cy.get('input[type="submit"]').click();
    
     // cy.contains("The file's contents are:").should("be.visible")
    })


    
    it.only('Cypress Test Case - Understanding upload file - Select file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.get('input[name="upfile"]').selectFile('D:/cypress learn/cypress/fixtures/upload/sample.txt');
    

      cy.wait(3000)
      cy.get('input[type="submit"]').click();
      cy.wait(10000)
    
      cy.contains("The file's contents are:").should("be.visible")
    })
   
    //Import - Uploading file 

    it('Cypress Test Case - Understanding download file ', function () {
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.downloadFile("https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB_CTFL_Syllabus-v4.0.pdf", "cypress/downloads", "istqbsyllabus"+r+".pdf")
      cy.readFile("cypress/downloads/istqbsyllabus"+r+".pdf").should('exist')
    })

    it.only('Cypress Test Case - Understanding download file ', function () {
      
      cy.downloadFile("https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-basket-of-assorted-roses-gerberas-with-teddy-112401-m.jpg","cypress/downloads", "card.jpg")
      cy.readFile('cypress/downloads/card.jpg').should('exist')
    })

    it('Cypress Test Case - Understanding download file ', function () {
      
      cy.downloadFile("https://www.usatoday.com/gcdn/-mm-/6cb0566daad6b8973e2c456e7a61df50f54939b5/c=0-117-1408-1994/local/-/media/2017/01/04/USATODAY/USATODAY/636191149244091355-GettyImages-537365893.jpg?width=660&height=880&fit=crop&format=pjpg&auto=webp","cypress/downloads", "tower.jpg")
      cy.readFile('cypress/downloads/tower.jpg').should('exist')
    })

  })