
const input = require('readline-sync')

let numero 
let media = 0
let acumulador = 0
for (let i = 0; i < 4; i++){
    numero = Number(input.question(`nota ${i+1}:  `))
    acumulador += numero
}
console.log('sua media é ', acumulador/4)