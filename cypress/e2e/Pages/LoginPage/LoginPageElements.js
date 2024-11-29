const loginPageLocators = {
    usernameField: 'input[type="text"]',
    passwordField: 'input[type="password"]',
    loginButton: 'button[type="submit"]'
    //errorMessage: '---'
   }
   
   const constants = {
    urlStage: "https://dev.bdrpk.ru/login",
    urlDev: "https://dev.bdrpk.ru/login",
    username: "test@mailinator.com",
    password: "password123",
    welcomeText: "Войти в личный кабинет",
    buttonFogetPassword: "Забыли пароль",
    userFirstname: "Arina",
    userLastname: "Test"
   
   }
     
   export { loginPageLocators,constants}
