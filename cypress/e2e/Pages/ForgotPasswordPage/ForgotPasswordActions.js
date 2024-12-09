import { forgotPasswordLocators,constants } from "./ForgotPasswordElements"

Cypress.Commands.add('assertToast', (message, options = {}) => {
  const { timeout = 5000 } = options;

  cy.get('.p-toast-message.p-toast-message-error', { timeout }) 
    .should('be.visible')
    .and('contain', message)
    .wait(timeout)
    .should('not.exist');
});

class ForgotPasswordPage {

  open() {
    cy.visit(constants.urlDev)
  }
  
  typeText(selector, text) {
    cy.get(selector).type(text)
  }
  
  clickButton(selector) {
    cy.get(selector).click()
  }

  //improve
  click(label){
    cy.contains(label).click()
  }
   
  requestCode(email) {
    this.typeText(forgotPasswordLocators.emailField, email)
    this.clickButton(forgotPasswordLocators.recoverButton)
  }

  assertErrorMessage(text) {
    cy.contains(text).should('be.visible')
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

  assertCorrectUrlLoaded(url) {
    cy.url().should('eq', url);
  }

  assertPlaceholder(selector, text) {
    cy.get(selector)
      .should('have.attr', 'placeholder', text);
  }
  
}
 
export default ForgotPasswordPage
 