class redifpage{
    logo(){
    return 'img[title="Rediff.com"]'
    }
    fullnameInput(){
        return 'input[name^="name"]'
    }
    redmailidInput(){
        return 'input[name^="login"]'
    
    }
    passwordInput(){
        return 'input[name^="passwd"]'

    }
    retypepasswordInput(){
        return 'input[name^="confirm_passwd"]'

    }
    alternativeemailInput(){
        return 'input[name^="altemail"]'

    }
    mobilenoInput(){
        return '#mobno'
    }
dateofbirthdayInput(){
    return ''
}
redifwithcreds(Fullname,Rediffmail,Password,Retypepassword,Alternateemail,Mobileno){
    cy.get(this.fullnameInput()).type(Fullname)
    cy.get(this.redmailidInput()).type(Rediffmail)
    cy.get(this.passwordInput()).type(Password)
    cy.get(this.retypepasswordInput()).type(Retypepassword)
    cy.get(this.alternativeemailInput()).type(Alternateemail)
    cy.get(this.mobilenoInput()).type(Mobileno)


}
}
const  redif = new redifpage()
export default redif;