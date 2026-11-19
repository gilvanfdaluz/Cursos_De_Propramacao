function limparEmail (email) {
    let emailLimpo = email.trim().toLowerCase()
    return emailLimpo
}

let emailSujo = '  GILVAN@HOTMAIL.COM  '
let email = limparEmail (emailSujo)
console.log(email)