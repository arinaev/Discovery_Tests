import {constants,loginPageLocators } from '../Pages/LoginPage/LoginPageElements.js';
import LoginPage from '../Pages/LoginPage/LoginPageActions.js';

describe('Login Page Design Test', () => {
  

  it('Verify correct view of the login page', () => {
    const loginPage = new LoginPage()
    
    loginPage.open()
    
    loginPage.assertAvailability(constants.buttonFogetPassword) 
    loginPage.assertAvailability(constants.welcomeText)
    loginPage.assertElementAvailability(loginPageLocators.loginButton)
    
  // Наличие всех элементов на странице в режиме полного/неполного/моб. экрана:
  // Радио кнопка для опций эл. почты и номера тел (по умолч. на эл. почте)
  // Поля для эл. почты/номера и пароля с иконками и плейсхолдером
 
  })
 
})


describe('Login functionality test', () => {

 it('Login with correct credentials', () => {
   const loginPage = new LoginPage()

   loginPage.open()
   loginPage.login(constants.username, constants.password)
   
   loginPage.assertSuccessfulLogin(constants.userFirstname, constants.userLastname)
  })

 /*
 it('Login with wrong credentials', () => {
  

 })
  */

})
