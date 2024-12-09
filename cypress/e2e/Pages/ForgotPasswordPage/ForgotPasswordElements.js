const forgotPasswordLocators = {
    emailField: 'input[type="text"]',
    //logo: '--',
    recoverButton: 'button[type="submit"]',
    buttonGoToLoginPage: '[aria-label="Перейти на страницу логина"]',
    emailFieldIcon: 'i[class="pi pi-at"]'
     
    
   }
   
   const forgotPasswordConstants = {
    urlStage: "https://stage.bdrpk.ru/recover-password",
    urlDev: "https://dev.bdrpk.ru/recover-password",
    emailAddress: "test@mailinator.com",
    wrongEmail: "wrong@example.com",
    wrongEmailFormat: "wrong email",
    recoverPasswordText: "Восстановление пароля",
    buttonGoToLoginPage: "Перейти на страницу логина",
    errorAlertText:"Ошибка валидации данных",
    errorNonExistingEmail:"Пользователь с таким email не найден." ,
    errorMessageTextEmptyField: "Поле обязательно для заполнения",
    errorInvalidEmail: "Поле должно быть действительным адресом электронной почты.",
    instructionPart_1: 'После нажатия кнопки "Восстановить" на ваш адрес электронной почты будет отправлено письмо со ссылкой для восстановления пароля.',
    instructionPart_2: 'Если для получения доступа вы указывали номер телефона, для восстановления доступа обратитесь к администратору.',
    successfulRequestMessage: "Письмо для восстановления пароля отправлено на ваш email.",
    placeholder: "example@mail.ru"
   }
     
   export { forgotPasswordLocators,forgotPasswordConstants }
