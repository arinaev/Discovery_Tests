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

      describe(`LoginForgot Password Page View on ${size.name} (${size.width}x${size.height})`, () => {

          const loginPage = new LoginPage()
          const forgotPasswordPage = new ForgotPasswordPage()

          beforeEach(() => {
              // Set the viewport for the current screen size
              cy.viewport(size.width, size.height);
              loginPage.open();
            });
                         
          it('---', () => {              
         
          })
          
          it('---', () => {
            
          })
        

        })
    })
})


describe('Forgot Password Functionality', () => {
  const loginPage = new LoginPage()
  const forgotPasswordPage = new ForgotPasswordPage()

  beforeEach(() => {
    loginPage.open()
  });

  it('--', () => {
    
   })

 it('--', () => {
   
 })

 
})




