             

    class addemployeepage{
        addemployeesubmenu(){
            return 'Add Employee'
        }
        firstnameInput(){
            return 'input[name="firstName"]'
        }
        lastnameInput(){
            return 'input[name="lastName"]'
        }
        savebutton(){
            return 'button[type="submit"] '
        }
        message(){
            return 'Successfully Saved'
        }
    }
    const addemployee=new addemployeepage()
    export default addemployee;
