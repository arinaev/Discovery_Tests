import { recoverPasswordConstants, recoverPasswordLocators } from "./RecoverPasswordElements";

Cypress.Commands.add('assertToast', (message, options = {}) => {
  const { timeout = 5000 } = options;

  cy.get('.p-toast-message.p-toast-message-error', { timeout }) 
    .should('be.visible')
    .and('contain', message)
    .wait(timeout)
    .should('not.exist');
});


class RecoverPasswordPage {
 
  typeText(selector, text) {
    cy.get(selector).type(text)
  }
  
  clickButton(selector) {
    cy.get(selector).click()
  }

  click(label){
    cy.contains(label).click()
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
  
}
 
export default RecoverPasswordPage