const loginPageLocators = {
    usernameField: 'input[type="text"]',
    passwordField: 'input[type="password"]',
    loginButton: 'button[type="submit"]',
    emailIcon: 'i[class="pi pi-envelope"]',
    keyIcon: 'i[class="pi pi-key"]',
    placeholderUsernameField: '[placeholder = "example@mail.ru"]',
    placeholderPassswordField: '[placeholder = "Введите пароль"]',
    emailRadiobutton: '[class="flex items-center"]:nth-child(1) ',
    phoneRadiobutton: '[class="flex items-center"]:nth-child(2)',
    emailRadiobuttonChecked: '[class="flex items-center"]:nth-child(1) > div > input'

    
   }
   
   const constants = {
    urlStage: "https://dev.bdrpk.ru/login",
    urlDev: "https://dev.bdrpk.ru/login",
    username: "test@mailinator.com",
    password: "password123",
    welcomeText: "Войти в личный кабинет",
    buttonFogetPassword: "Забыли пароль",
    userFirstname: "Arina",
    userLastname: "Test",
    errorAlertText:"Ошибка валидации",
    errorMessageTextEmptyField: "Поле обязательно для заполнения",
    errorAlertTextWrongInput: "Указан неправильный логин или пароль",
    wrongUsername: "wrong@example.com",
    wrongPassword: "Wrong",
    
   }
     
   export { loginPageLocators,constants}
