import data from '../../fixtures/logincreds.json'
import login from '../../pages/loginpage.po'
import dashboard from '../../pages/dashboardpage.po'
describe('TEST SUIT( login functionality)',()=>{

    before("lanch app",()=>{
        cy.log("this section will run before  all")
 
     }) 

     after("lanch app",()=>{
        cy.log("this section will run after  all")
 
     })


     beforeEach("lanch app",()=>{
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.get(login.logo()).should('be.visible')

    })

    afterEach("lanch app",()=>{
        cy.log("test running completed")
 
     })
    it('TEST casesverify the login with positive credentials',()=>{

cy.get(login.usernameInput()).type('Admin')
cy.get(login.passwordInput()).type('admin123')
cy.get(login.submitbutton).click()
cy.contains(dashboard.timeandatworkcard()).should('be.visible')
cy.contains(dashboard.dashboardmenu()).should('be.visible')
    })
    it("verify login with valid username and invalid password",()=>{
       // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(login.usernameInput()).type('Admin')
        cy.get(login.passwordInput()).type('admin12344')
        cy.get(login.submitbutton).click()
        cy.contains(login.loginerrormessage()).should('be.visible')
    })
    it("verify login with invalid username and valid password",()=>{
       // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.get(login.usernameInput()).type('adminghghjh')
       cy.get(login.passwordInput()).type('admin123')
       cy.get(login.submitbutton).click()
       cy.contains(login.loginerrormessage()).should('be.visible')
   })
    it("verify login with invalid username and invalid password",()=>{
      //  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(login.usernameInput()).type('adminyuih')
      cy.get(login.passwordInput()).type('admin12344')
      cy.get(login.submitbutton).click()
      cy.contains(login.loginerrormessage()).should('be.visible')
  })
})
