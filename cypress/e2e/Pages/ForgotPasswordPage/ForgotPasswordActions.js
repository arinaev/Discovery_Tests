import { forgotPasswordLocators,constants } from "./ForgotPasswordElements"

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
  /*
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
 */
  
  assertErrorMessage(text) {
    cy.contains(text).should('be.visible')
  } 

 /*
  assertErrorAlertOpens(alertText) {
    cy.on('window:alert', (text) => {
       expect(text).to.equal(alertText);
    })
  } */

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
 
export default ForgotPasswordPage
 