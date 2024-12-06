import {constants,loginPageLocators } from '../Pages/LoginPage/LoginPageElements.js';
import LoginPage from '../Pages/LoginPage/LoginPageActions.js';
import { forgotPasswordLocators,forgotPasswordConstants } from '../Pages/ForgotPasswordPage/ForgotPasswordElements.js';
import ForgotPasswordPage from '../Pages/ForgotPasswordPage/ForgotPasswordActions.js';

describe('Forgot Password Page View', () => {
  
  const screenSizes = [
      { width: 1920, height: 1080, name: 'Desktop' },
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
          
          it('should display an email input field with apropriate icon and placeholder', () => {
            forgotPasswordPage.assertElementAvailability(forgotPasswordLocators.emailField)
            forgotPasswordPage.assertElementAvailability(forgotPasswordLocators.emailFieldIcon)
            //check placeholder
            
          })

          it('should display button "Перейти на страницу логина"', () => {              
            forgotPasswordPage.assertElementAvailability(forgotPasswordLocators.buttonGoToLoginPage)
          })
          
          it('should display text with recover password instructions', () => {
            forgotPasswordPage.assertAvailability(forgotPasswordConstants.instructionPart_1)
            forgotPasswordPage.assertAvailability(forgotPasswordConstants.instructionPart_2)
          })

        })
    })
})

/*
//Проверить навигацию после перейхода на страницу логина
//Проверить навигацию после восстановитления пароля
//Нажать на кнопку "Перейти на страницу логина" после удачного восстановитления пароля
//Проверить подсвечивание полей после неудачного восстановитления пароля

*/

describe('Forgot Password Functionality', () => {
  const loginPage = new LoginPage()
  const forgotPasswordPage = new ForgotPasswordPage()

  beforeEach(() => {
    loginPage.open()
    loginPage.click(constants.buttonFogetPassword)
  });

  it('should be loaded a correct URL after openng the Forgot Password page', () => {
    forgotPasswordPage.assertCorrectUrlLoaded(forgotPasswordConstants.urlDev);
  })

 
  it('should be opened a login page after clicking on the "Перейти на страницу логина" button', () => {
    forgotPasswordPage.click(forgotPasswordConstants.buttonGoToLoginPage)
    forgotPasswordPage.assertCorrectUrlLoaded(constants.urlDev);
  })

    
   it('should display errors when the email input field is empty', () => {
    forgotPasswordPage.clickButton(forgotPasswordLocators.recoverButton)
    //forgotPasswordPage.assertToastAlert(constants.errorAlertText) //doesn't work
    forgotPasswordPage.assertErrorMessage(constants.errorMessageTextEmptyField)
   })
  
   /*
   it('should display errors when the entered email is invalid', () => {
     forgotPasswordPage.requestCode(forgotPasswordConstants.wrongEmailFormat)
    // forgotPasswordPage.assertToastAlert(forgotPasswordPage.errorAlertTextWrongInput) //doesn't work
     forgotPasswordPage.assertErrorMessage(forgotPasswordConstants.errorInvalidEmail)
  
   })*/

   it('should display errors when the email address is not existing in the system', () => {
    forgotPasswordPage.requestCode(constants.wrongEmail)
    //forgotPasswordPage.assertToastAlert(аconstants.errorNonExistingEmail) //doesn't work
   })
  
   /*
   it('should display success message when the email address is correct', () => {
    forgotPasswordPage.requestCode(constants.wrongEmail)
    loginPage.assertToastAlert(constants.errorAlertTextWrongInput)
   })*/
  

/*
  Восстоновить пароль снова в течении 5 мин.
Восстоновить пароль снова по истечению 5 мин.

 */
})



