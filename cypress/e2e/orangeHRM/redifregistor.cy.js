import redif from "../../pages/rediffpage.po"
import data from  "../../fixtures/pim/rediff.json"

describe('redif registor verification ', () => {
    it('redif registor ', () => {
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
      redif.redifwithcreds(data.Fullname,data.Rediffmail,data.Password,data.Retypepassword,data.Alternateemail,data.Mobileno)
      cy.get('select[name^="DOB_Day"]').select('21')
      cy.get('select[name^="DOB_Month"]').select('06')
      cy.get('select[name^="DOB_Year"]').select('2019')
      cy.get('input[value="f"]').click()
      cy.get('#country').select('India')
      cy.get('select[name^="city"]').select('Bangalore')
    })
  })