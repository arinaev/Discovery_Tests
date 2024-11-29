import {loginPageLocators,constants} from "./LoginPageElements"

class LoginPage {

  open() {
    cy.visit(constants.urlStage)
  }
  
  typeText(selector, text) {
    cy.get(selector).type(text)
  }
  
  clickButton(selector) {
    cy.get(selector).click()
  }
  
  login(username, password) {
    this.typeText(loginPageLocators.usernameField, username)
    this.typeText(loginPageLocators.passwordField, password)
    this.clickButton(loginPageLocators.loginButton)
  }
 
  assertSuccessfulLogin(userFirstName, userLastName){
    cy.wait(7000)
    cy.contains(userFirstName).should('be.visible')
    cy.contains(userLastName).should('be.visible')
   }
 
   /*
  assertErrorMessage() {
    cy.get(this.elements.errorMessage).should('be.visible')
    cy.contains('Invalid credentials').should('be.visible')
   } */


  assertAvailability(text) {
    cy.contains(text).should('be.visible')
   } 
  
  assertElementAvailability(selector) {
    cy.get(selector).should('be.visible')
  }
}
 
export default LoginPage
 