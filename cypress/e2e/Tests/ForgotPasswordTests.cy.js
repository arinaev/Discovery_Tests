import {constants,loginPageLocators } from '../Pages/LoginPage/LoginPageElements.js';
import LoginPage from '../Pages/LoginPage/LoginPageActions.js';
import { forgotPasswordLocators,forgotPasswordConstants } from '../Pages/ForgotPasswordPage/ForgotPasswordElements.js';
import ForgotPasswordPage from '../Pages/ForgotPasswordPage/ForgotPasswordActions.js';

describe('Forgot Password Page View', () => {
  
  const screenSizes = [
      { width: 1921, height: 1080, name: 'Desktop' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 375, height: 812, name: 'Mobile' },
    ];

    Cypress._.each(screenSizes, (size) => {

      describe(`Forgot Password Page View on ${size.name} (${size.width}x${size.height})`, () => {

          const loginPage = new LoginPage()
          const forgotPasswordPage = new ForgotPasswordPage()

          beforeEach(() => {
              cy.viewport(size.width, size.height);
              loginPage.open();
              loginPage.click(constants.buttonFogetPassword)
            });
          /*               
          it('Лого', () => {              
         
          })*/
          
          it('should display text "Восстановление пароля"', () => {
            forgotPasswordPage.assertAvailability(forgotPasswordConstants.recoverPasswordText)
            
          })
          
          it('should display button "Восстановить"', () => {              
            forgotPasswordPage.assertElementAvailability(forgotPasswordLocators.recoverButton)
          })
          /*
          it('Поле для эл. почты с иконкой и плейсхолдеорм', () => {
            
          })*/

          it('should display button "Перейти на страницу логина"', () => {              
            forgotPasswordPage.assertElementAvailability(forgotPasswordLocators.buttonGoToLoginPage)
          })
          
          it('should display text with recover password instructions', () => {
            forgotPasswordPage.assertAvailability(forgotPasswordConstants.instructionPart_1)
            forgotPasswordPage.assertAvailability(forgotPasswordConstants.instructionPart_1)
          })

        })
    })
})

/*
Проверить, что url правильно указан
Нажать на кнопку "Перейти на страницу логина"
Проверить навигацию после перейхода на страницу логина
Восстановить указав верную эл. почту
Восстановить указав неверную эл. почту
Восстановить оставив поле пустым
Восстановить указав верный номер телефона
Восстановить указав неверный номер телефона
Нажать на кнопку "Восстановить"
Проверить навигацию после восстановитления пароля
Восстоновить пароль снова в течении 5 мин.
Восстоновить пароль снова по истечению 5 мин.
Нажать на кнопку "Перейти на страницу логина" после удачного восстановитления пароля
Проверить уведомления об ошибках и подсвечивание полей после неудачного восстановитления пароля

*/
/*
describe('Forgot Password Functionality', () => {
  const loginPage = new LoginPage()
  const forgotPasswordPage = new ForgotPasswordPage()

  beforeEach(() => {
    loginPage.open()
    loginPage.click(constants.buttonFogetPassword)
  });

  it('--', () => {
    
   })

 it('--', () => {
   
 })

 
})
*/


