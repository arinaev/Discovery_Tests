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
    cy.wait(5000)
    cy.contains(userFirstName).should('be.visible')
    cy.contains(userLastName).should('be.visible')
   }
 
  
  assertErrorMessage(text) {
    //cy.get(this.elements.errorMessage).should('be.visible')
    cy.contains(text).should('be.visible')
  } 

  assertErrorAlertOpens(alertText) {
    cy.on('window:alert', (text) => {
        expect(text).to.equal(alertTExt);
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
  
}
 
export default LoginPage
 