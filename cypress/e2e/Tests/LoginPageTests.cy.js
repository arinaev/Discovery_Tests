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
    
  // Наличие всех элементов на странице в режиме полного/неполного/моб. экрана:
  // Радио кнопка для опций эл. почты и номера тел (по умолч. на эл. почте)
  // Поля для эл. почты/номера и пароля с иконками и плейсхолдером
 
  })
 
})


describe('Login Functionality', () => {

 it('should allow login with correct credentials', () => {
   const loginPage = new LoginPage()

   loginPage.open()
   loginPage.login(constants.username, constants.password)
   
   loginPage.assertSuccessfulLogin(constants.userFirstname, constants.userLastname)
  })

  /*
 it('should display errors when the login form is empty', () => {
  
 })
  */

   /*
 it('should display errors when the username is empty', () => {
  
 })
  */

   /*
 it('should display errors when the password is empty', () => {
  
 })
  */

 /*
 it('should display errors when the password is wrong', () => {

 })
  */

  /*
 it('should display errors when the username is wrong', () => {
 
 })
  */

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
Проверить навигацию после удачного входа в личн. кабинет
Проверить уведомления об ошибках и подсвечивание полей после неудачного входа в личн. кабинет
*/

})
