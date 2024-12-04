const forgotPasswordLocators = {
    emailField: 'input[type="text"]',
    //logo: '--',
    recoverButton: 'button[type="submit"]',
    buttonGoToLoginPage: '[aria-label="Перейти на страницу логина"]',
    emailFieldIcon: 'i[class="pi pi-at"]'
    //placeholder of  the field
    
    
   }
   
   const forgotPasswordConstants = {
    urlStage: "https://stage.bdrpk.ru/recover-password",
    urlDev: "https://dev.bdrpk.ru/recover-password",
    emailAddress: "test@mailinator.com",
    wrongEmail: "wrong@example.com",
    recoverPasswordText: "Восстановление пароля",
    buttonGoToLoginPage: "Перейти на страницу логина",
    instructionPart_1: 'После нажатия кнопки "Восстановить" на ваш адрес электронной почты будет отправлено письмо со ссылкой для восстановления пароля.',
    instructionPart_2: 'Если для получения доступа вы указывали номер телефона, для восстановления доступа обратитесь к администратору.'
   
   }
     
   export { forgotPasswordLocators,forgotPasswordConstants }
