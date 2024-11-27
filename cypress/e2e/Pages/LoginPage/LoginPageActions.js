import {loginPageLocators,constants} from "./LoginPageElements"

class LoginPage {

  open() {
    cy.visit('https://stage.bdrpk.ru/login')
  }
 
 /*
 
  typeText(selector, text) {
    cy.get(selector).type(text)
  }
 
 
  clickButton(selector) {
    cy.get(selector).click()
  }
 
 
  login(username, password) {
    //cy.get(this.elements.usernameField).type(username)
    this.typeText(this.elements.usernameField, username)
    this.typeText(this.elements.passwordField, password)
    this.clickButton(this.elements.loginButton)
  }
 
 
  assertSuccessfulLogin(){
    cy.contains('Dashboard').should('be.visible')
 
 
  }
 
  assertErrorMessage() {
    cy.get(this.elements.errorMessage).should('be.visible')
    cy.contains('Invalid credentials').should('be.visible')
 
  } */
 
 }

 export default LoginPage
 