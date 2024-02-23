       
       import logindata from '../../fixtures/logincreds.json'
      
       import login from '../../pages/loginpage.po'
       import dashboard from '../../pages/dashboardpage.po'
       import addemployee from '../../pages/addemployeepage.po'
import data from '../../fixtures/pim/addemployee1.json'


    
  

describe("verify addemployee functionality", function () {
  
 
  
  // availablefixtures.forEach((afixture) => {
  //   describe(afixture.context, () => {
  //     before(function () {
  //       cy.fixture(afixture.name).then((data)=>{ 
  //         this.data = data;
  //       })
  //     })
data.forEach((data)=>{




    it("verify add employee mandatory details", function(){

    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   cy.get(login.usernameInput()).type(logindata.username)
 cy.get(login.passwordInput()).type(logindata.password)
 cy.get(login.submitbutton).click()
 cy.contains(dashboard.dashboardmenu()).should("be.visible")
 cy.contains(dashboard.pimmenu()).click()
 cy.contains(addemployee.addemployeesubmenu()).click()
 cy.get(addemployee.firstnameInput()).type(data.firstname)
 cy.get(addemployee.lastnameInput()).type(data.lastname)
 cy.get(addemployee.savebutton()).click()
 cy.contains(addemployee.message()).should('be.visible')
})


})
})
//   })
// })
