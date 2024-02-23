class loginpage{
    logo(){
        return 'img[alt="company-branding"]' 
    }
 usernameInput(){
   return 'input[name="username"]'

 }
 passwordInput(){
    return 'input[type="password"]'
 }
 
    submitbutton = 'Button[type="submit"]'
 

 loginerrormessage(){
    return 'Invalid credentials'
 }
}
const  login = new loginpage()
export default login;