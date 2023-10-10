const readline = require('readline-sync')

const numero = readline.questionFloat("Numero: ")

if(numero > 0){
    console.log(`O numero ${numero} é positivo`);

} else if(numero == 0){
    console.log(`O numero é 0`)
} else{
    console.log(`O numero ${numero} é negativo`)
}