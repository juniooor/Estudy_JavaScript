const input = require('readline-sync')

const numerocerto = 5
let numero = Number(input.question('qual numero voce escolhe: '))


while (numero !== numerocerto){
    console.log('você errou, tente de novo')
    numero = Number(input.question('qual numero você escolhe: '))

}
