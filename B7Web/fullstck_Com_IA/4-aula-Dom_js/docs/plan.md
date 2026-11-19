console.log("Está funcionando")
console.error("Alerta de Problema")
console.log("Isso aqui não está muito legal")

===========================================

let name = 'Paulo'
let age = 40
let siTeacher = true
let email = null //Sem valor
//let email = undefined // Não está definida

if (typeof age === 'number') {
    console.log('é um número');
}

============================================
LET:

let name = 'Paulo'
let age = 40
let siTeacher = true
let email = null //Sem valor

console.log(age)
age = 12
console.log(age)

============================================
CONST:

let name = 'Paulo' 
const age = 40  // constante não permite alterações
let siTeacher = true
let email = null //Sem valor

console.log(age)
age = 12

==============================================
STRING:

const firstName = 'André'
const lastName = 'Souza'
const fullName = `${firstName} ${lastName}`
const age = 90

const message = `Olá, eu sou ${fullName} e tenho ${age}`

console.log(message)

===============================================
METODOS DE STING 2 
let email = ' GILVAN@HOTMAIL.COM '
email = email.trim().toLocaleLowerCase()

console.log(email)

================================================
METODOS DE STING 2 

function limparEmail (email) {
    let emailLimpo = email.trim().toLowerCase()
    return emailLimpo
}

let emailSujo = '  GILVAN@HOTMAIL.COM  '
let email = limparEmail (emailSujo)
console.log(email)