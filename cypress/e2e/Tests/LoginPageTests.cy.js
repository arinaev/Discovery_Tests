import {constants,loginPageLocators } from '../Pages/LoginPage/LoginPageElements.js';
import LoginPage from '../Pages/LoginPage/LoginPageActions.js';

describe('Login Page View', () => {
  
  const loginPage = new LoginPage()

  before(() => {  
    loginPage.open()
  });
    
  it('should display all required UI elements', () => {
             
    loginPage.assertAvailability(constants.buttonFogetPassword) 
    loginPage.assertAvailability(constants.welcomeText)
    loginPage.assertElementAvailability(loginPageLocators.loginButton)
    loginPage.assertElementAvailability(loginPageLocators.emailIcon)
    loginPage.assertElementAvailability(loginPageLocators.keyIcon)
    loginPage.assertElementAvailability(loginPageLocators.placeholderPassswordField)
    loginPage.assertElementAvailability(loginPageLocators.placeholderUsernameField)
    
  // Наличие всех элементов на странице в режиме полного/неполного/моб. экрана:
  // Радио кнопка для опций эл. почты и номера тел (по умолч. на эл. почте)
 
  })
 
})


describe('Login Functionality', () => {
  const loginPage = new LoginPage()

 it('should display errors when the login form is empty', () => {
  loginPage.open()
  loginPage.clickButton(loginPageLocators.loginButton)

  loginPage.assertErrorAlertOpens(constants.errorAlertText)
  //Add assertion of message "Поле обязательно для заполнения" для мейла
  //Add assertion of message "Поле обязательно для заполнения" для пасворда
  
 })

 it('should display errors when the username is empty', () => {
  loginPage.open()
  loginPage.login(" ", constants.password)

  loginPage.assertErrorAlertOpens(constants.errorAlertText)
  loginPage.assertErrorMessage(constants.errorMessageTextEmptyField)

 })

   
 it('should display errors when the password is empty', () => {
  loginPage.open()
  loginPage.login(constants.username, " ")
  
  loginPage.assertErrorAlertOpens(constants.errorAlertText)
  loginPage.assertErrorMessage(constants.errorMessageTextEmptyField)
  
 })
  

 it('should display errors when the password is wrong', () => {
   loginPage.open()
   loginPage.login(constants.username, constants.wrongPassword)
   
   loginPage.assertErrorAlertOpens(constants.errorAlertTextWrongInput)

 })

 it('should display errors when the username is wrong', () => {
  loginPage.open()
  loginPage.login(constants.wrongUsername, constants.password)
   
  loginPage.assertErrorAlertOpens(constants.errorAlertTextWrongInput)
 
 })

 it('should allow login with correct credentials', () => {
   
   loginPage.open()
   loginPage.login(constants.username, constants.password)
   
   loginPage.assertSuccessfulLogin(constants.userFirstname, constants.userLastname)
  }) 

     

 /*
Проверить, что url правильно указан
Проверить, что опция эл. почты выбрана по умолчанию
Переход с опции эл. почты на номер телефона и обратно
Войти указав верный номер и пароль
Войти указав неверный номер и пароль
Войти указав только один из полей верно (номера/пароля)
Войти оставив поля пустыми (номера/пароля)
Войти оставив один из полей пустым (номера/пароля)
Нажать на кнопку "Войти"
Проверить уведомления об ошибках и подсвечивание полей после неудачного входа в личн. кабинет
*/

})
