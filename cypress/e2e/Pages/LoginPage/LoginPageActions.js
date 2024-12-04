import {loginPageLocators,constants} from "./LoginPageElements"

Cypress.Commands.add('assertToast', (message, options = {}) => {
  const { timeout = 5000 } = options;

  cy.get('.p-toast-message.p-toast-message-error', { timeout }) // Adjust selector
    .should('be.visible')
    .and('contain', message)
    .wait(timeout)
    .should('not.exist');
});


class LoginPage {

  open() {
    cy.visit(constants.urlDev)
  }
  
  typeText(selector, text) {
    cy.get(selector).type(text)
  }
  
  clickButton(selector) {
    cy.get(selector).click()
  }

  click(label){
    cy.contains(label).click()
  }
  
  login(email, password) {
    this.typeText(loginPageLocators.emailField, email)
    this.typeText(loginPageLocators.passwordField, password)
    this.clickButton(loginPageLocators.loginButton)
  }
 
  assertSuccessfulLogin(userFirstName, userLastName){
    cy.wait(5000)
    cy.contains(userFirstName).should('be.visible')
    cy.contains(userLastName).should('be.visible')
   }
 
  
  assertErrorMessage(text) {
    cy.contains(text).should('be.visible')
  } 

  assertErrorAlertOpens(alertText) {
     cy.on('window:alert', (text) => {
        expect(text).to.equal(alertText);
             })
  } 

  assertAvailability(text) {
    cy.contains(text).should('be.visible')
   } 
  
  assertElementAvailability(selector) {
    cy.get(selector).should('be.visible')
  }

  assertElementIsChecked(selector) {
    cy.get(selector).should('be.checked')
  }

  assertToastAlert(text) {
  cy.assertToast(text);
  }
  
}
 
export default LoginPage
 