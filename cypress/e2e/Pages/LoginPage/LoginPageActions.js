import {loginPageLocators,constants} from "./LoginPageElements"

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
    //cy.get(this.elements.errorMessage).should('be.visible')
    cy.contains(text).should('be.visible')
  } 

 *
  assertErrorAlertOpens(alertText) {
    let alertTriggered = false;
    cy.on('window:alert', (text) => {
        expect(text).to.equal(alertText);
        alertTriggered = true;
       })
    cy.wrap(null).should(() => {
        expect(alertTriggered).to.be.true; // This will appear in the Cypress log
      });
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
  
}
 
export default LoginPage
 