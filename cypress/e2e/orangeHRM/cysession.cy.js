import login from '../../pages/loginpage.po'


describe('Validate Orange HRM Login functionality', function () {


  beforeEach(function () {

    cy.session("Login session", () => {

      cy.visit("/web/index.php/auth/login")
      cy.get(login.usernameInput()).type('Admin')
      cy.get(login.passwordInput()).type('admin123')
  
      cy.get(login.submitbutton).click()
   
    })

  })

  it('Validate Add job title ', function () {


    //cy.contains("Dashboard").should("be.visible")

    cy.visit("/web/index.php/admin/saveJobTitle");
    let r = (Math.random() + 1).toString(36).substring(7);
    cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Senior Analyst"+r)

    cy.get('button[type="submit"]').click()


  })

  it('Validate Add employee ', function () {


    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')

    cy.addemployee("Raju", "G")


  })

  it('Validate add pay grade', function () {


    cy.visit("/web/index.php/admin/payGrade")
    let r = (Math.random() + 1).toString(36).substring(7);

    cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Grade 6"+r)

    cy.get('button[type="submit"]').click()
    cy.wait(3000)


  })

   it('Validate employment status ', function () {


    cy.visit("/web/index.php/admin/saveEmploymentStatus")
    cy.wait(3000)
    cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Full time")

    cy.get('button[type="submit"]').click()

   })

  it('Validate Employee report ', function () {


    cy.visit("/web/index.php/time/displayProjectReportCriteria")


  })


  it('Attendance Total Summary Report', function () {


    cy.visit("web/index.php/time/displayAttendanceSummaryReportCriteria")
    cy.wait(3000)
    //cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")

  })

  it('Add vacancy', function () {


    cy.visit("web/index.php/recruitment/addJobVacancy")
    cy.wait(3000)
    //cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")

  })

  

})