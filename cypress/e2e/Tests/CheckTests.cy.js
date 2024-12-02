import {constants,loginPageLocators } from '../Pages/LoginPage/LoginPageElements.js';
import LoginPage from '../Pages/LoginPage/LoginPageActions.js';

describe('Login Page View', () => {
  
    const screenSizes = [
        { width: 1920, height: 1080, name: 'Desktop' },
        { width: 768, height: 1024, name: 'Tablet' },
        { width: 375, height: 812, name: 'Mobile' },
      ];

      Cypress._.each(screenSizes, (size) => {

        describe(`Login Page View on ${size.name} (${size.width}x${size.height}`, () => {
  
            const loginPage = new LoginPage()

            beforeEach(() => {
                // Set the viewport for the current screen size
                cy.viewport(size.width, size.height);
                loginPage.open(); // Replace with your actual login page URL
              });
          
            /*
            before(() => {  
              loginPage.open()
            }); */
              
            it('should display the "Foget Password" link', () => {             
              loginPage.assertAvailability(constants.buttonFogetPassword)     
            // Наличие всех элементов на странице в режиме полного/неполного/моб. экрана:
           
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
          
            it('should display the username input field', () => {
              loginPage.open()         
              loginPage.assertElementAvailability(loginPageLocators.placeholderUsernameField)
            })
           
           
          })

      })
 
 
})