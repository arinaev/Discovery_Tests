const loginPageLocators = {
    emailField: 'input[type="text"]',
    passwordField: 'input[type="password"]',
    loginButton: 'button[type="submit"]',
    emailIcon: 'i[class="pi pi-envelope"]',
    keyIcon: 'i[class="pi pi-key"]',
    placeholderEmailField: '[placeholder = "example@mail.ru"]',
    placeholderPassswordField: '[placeholder = "Введите пароль"]',
    emailRadiobutton: '[class="flex items-center"]:nth-child(1) ',
    phoneRadiobutton: '[class="flex items-center"]:nth-child(2)',
    emailRadiobuttonChecked: '[class="flex items-center"]:nth-child(1) > div > input',
    phoneField: '[type="text"]',
    phoneIcon: 'i[class="pi pi-phone"]',
    placeholderPhoneField: '[placeholder="+7(___)___-__-__"]'

    
   }
   
   const constants = {
    urlStage: "https://dev.bdrpk.ru/login",
    urlDev: "https://dev.bdrpk.ru/login",
    emailAddress: "test@mailinator.com",
    password: "password123",
    welcomeText: "Войти в личный кабинет",
    buttonFogetPassword: "Забыли пароль",
    userFirstname: "Arina",
    userLastname: "Test",
    errorAlertText:"Ошибка валидации",
    errorMessageTextEmptyField: "Поле обязательно для заполнения",
    errorAlertTextWrongInput: "Указан неправильный логин или пароль",
    wrongEmail: "wrong@example.com",
    wrongPassword: "Wrong",
    phone: "4125963254",
    wrongPhone: "0000000000"
    
   }
     
   export { loginPageLocators,constants}
