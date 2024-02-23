       
       import logindata from '../../fixtures/logincreds.json'
      
       import login from '../../pages/loginpage.po'
       import dashboard from '../../pages/dashboardpage.po'
       import addemployee from '../../pages/addemployeepage.po'
import data from '../../fixtures/pim/addemployee1.json'


    
  

describe("verify addemployee functionality",  ()=> {
  
 
  
  // availablefixtures.forEach((afixture) => {
  //   describe(afixture.context, () => {
  //     before(function () {
  //       cy.fixture(afixture.name).then((data)=>{ 
  //         this.data = data;
  //       })
  //     })
 
              beforeEach(()=>{
                 
                cy.session("Login session", () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   cy.get(login.usernameInput()).type(logindata.username)
 cy.get(login.passwordInput()).type(logindata.password)
 cy.get(login.submitbutton).click()
    })
})

it('verify dashboard',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
 cy.contains(dashboard.dashboardmenu()).should("be.visible")
 cy.contains(dashboard.pimmenu()).click()
 cy.contains(addemployee.addemployeesubmenu()).click()
})
     data.forEach((data)=>{

 it('Validate Add employee ',  ()=> {


    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
 cy.get(addemployee.firstnameInput()).type(data.firstname)
 cy.get(addemployee.lastnameInput()).type(data.lastname)
 cy.get(addemployee.savebutton()).click()
 cy.contains(addemployee.message()).should('be.visible')
})
})

})

//   })
// })
