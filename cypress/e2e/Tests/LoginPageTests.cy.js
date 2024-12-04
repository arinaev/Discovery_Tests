import {constants,loginPageLocators } from '../Pages/LoginPage/LoginPageElements.js';
import LoginPage from '../Pages/LoginPage/LoginPageActions.js';

describe('Login Page View', () => {
  
  const screenSizes = [
      { width: 1920, height: 1080, name: 'Desktop' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 375, height: 812, name: 'Mobile' },
    ];

    Cypress._.each(screenSizes, (size) => {

      describe(`Login Page View on ${size.name} (${size.width}x${size.height})`, () => {

          const loginPage = new LoginPage()

          beforeEach(() => {
              // Set the viewport for the current screen size
              cy.viewport(size.width, size.height);
              loginPage.open();
            });
                         
          it('should display the "Foget Password" link', () => {             
            loginPage.assertAvailability(constants.buttonFogetPassword)     
         
          })
          
          it('should display radiobuttons for Email and Phone number options', () => {
            loginPage.open()         
            loginPage.assertElementAvailability(loginPageLocators.emailRadiobutton)
            loginPage.assertElementAvailability(loginPageLocators.phoneRadiobutton)
          })
        
          it('should display the radiobutton for Email as checked by default', () => {
            loginPage.open()         
            loginPage.assertElementIsChecked(loginPageLocators.emailRadiobuttonChecked)
          })
        
          it('should display a welcome text', () => {
            loginPage.open()         
            loginPage.assertAvailability(constants.welcomeText)
          })
        
          it('should display the "Login" button', () => {
            loginPage.open()         
            loginPage.assertElementAvailability(loginPageLocators.loginButton)
          })
        
          it('should display the email icon for the email input field', () => {
            loginPage.open()         
            loginPage.assertElementAvailability(loginPageLocators.emailIcon) 
          })
        
          it('should display the key icon for the password input field', () => {
            loginPage.open()         
            loginPage.assertElementAvailability(loginPageLocators.keyIcon) 
          })
        
          it('should display the password input field', () => {
            loginPage.open()         
            loginPage.assertElementAvailability(loginPageLocators.placeholderPassswordField)
          })
        
          it('should display the email address input field', () => {
            loginPage.open()         
            loginPage.assertElementAvailability(loginPageLocators.placeholderEmailField)
          })

          it('should display the phone icon for the phone number input field', () => {
            loginPage.open()
            loginPage.clickButton(loginPageLocators.phoneRadiobutton)         
            loginPage.assertElementAvailability(loginPageLocators.phoneIcon)
          })

        })
    })
})
// проверить отображение лого

describe('Login Functionality with Email', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.open()
  });

  it('should be loaded a correct URL', () => {
    cy.url().should('eq', constants.urlDev);
   })

 it('should display errors when the login form is empty', () => {
  loginPage.clickButton(loginPageLocators.loginButton)
  //loginPage.assertErrorAlertOpens(constants.errorAlertText) //the assertion doesn't implemented, doesn't work
  //Alert is closed
  loginPage.assertElementAvailability(loginPageLocators.errorMessageForEmailField)
  loginPage.assertElementAvailability(loginPageLocators.errorMessageForPasswordField) 
  
 })

 it('should display errors when the email input field is empty', () => {
  loginPage.login(" ", constants.password)
  //loginPage.assertErrorAlertOpens(constants.errorAlertText)
  loginPage.assertErrorMessage(constants.errorMessageTextEmptyField)
 })

   
 it('should display errors when the password is empty', () => {
  loginPage.login(constants.emailAddress, " ")
  //loginPage.assertErrorAlertOpens(constants.errorAlertText)
  loginPage.assertErrorMessage(constants.errorMessageTextEmptyField)
 })

 it('should display errors when the password is wrong', () => {
   loginPage.login(constants.emailAddress, constants.wrongPassword)
  // loginPage.assertErrorAlertOpens(constants.errorAlertTextWrongInput)

 })

 it('should display errors when the email address is wrong', () => {
  loginPage.login(constants.wrongEmail, constants.password)
  //loginPage.assertErrorAlertOpens(constants.errorAlertTextWrongInput)
 })

 it('should allow login with correct credentials', () => {
   loginPage.login(constants.emailAddress, constants.password)
   loginPage.assertSuccessfulLogin(constants.userFirstname, constants.userLastname)
 }) 

 //Проверить подсвечивание полей после неудачного входа в личн. кабинет
})


describe('Login Functionality with Phone number', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.open()
    loginPage.clickButton(loginPageLocators.phoneRadiobutton)
  });

 it('should display errors when the login form is empty', () => {
  loginPage.clickButton(loginPageLocators.loginButton)
  //loginPage.assertErrorAlertOpens(constants.errorAlertText) //the assertion doesn't implemented, doesn't work
  //Alert is closed
  loginPage.assertElementAvailability(loginPageLocators.errorMessageForPhoneField)
  loginPage.assertElementAvailability(loginPageLocators.errorMessageForPasswordField) 
  })

 it('should display errors when the phone number input field is empty', () => {
  loginPage.login(" ", constants.password)
  //loginPage.assertErrorAlertOpens(constants.errorAlertText)
  loginPage.assertErrorMessage(constants.errorMessageTextEmptyField)  
 })

 it('should display errors when the password is empty', () => {
  loginPage.login(constants.phone, " ")
  //loginPage.assertErrorAlertOpens(constants.errorAlertText)
  loginPage.assertErrorMessage(constants.errorMessageTextEmptyField)
 })

 it('should display errors when the password is wrong', () => {
  loginPage.login(constants.phone, constants.wrongPassword)
  //loginPage.assertErrorAlertOpens(constants.errorAlertTextWrongInput)
 })

 it('should display errors when the phone number is wrong', () => {
  loginPage.login(constants.wrongPhone, constants.password)
  //loginPage.assertErrorAlertOpens(constants.errorAlertTextWrongInput)
 })

 it('should allow login with correct credentials', () => {
  loginPage.login(constants.phone, constants.password)
  loginPage.assertSuccessfulLogin(constants.userFirstname, constants.userLastname)
 }) 

 //Проверить подсвечивание полей после неудачного входа в личн. кабинет
}) 

