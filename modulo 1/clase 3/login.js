let readlineSync = require('readline-sync');
let usuario = readlineSync.question
let usuarioInicial = 'Juan'
let contraseñaInicial = 'claveJuan'

if (usuario == usuarioInicial && contraseña == contraseñaInicial){
    console.log ('Bienvenido!')
} else {
    console.log('usuario o contraseña incorrecta ')
}