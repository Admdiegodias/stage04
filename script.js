alert("Usuário, a seguir, forneça dois números para que ocorra operações matemáticas! ")

let numberOne = prompt("Digite o primeiro número ")
let numberTwo = prompt("Digite o segundo número ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = (numberOne / numberTwo).toFixed(2)
const rest = numberOne % numberTwo

alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é : " + sub)
alert("A multiplicação dos dois números é: " + mult)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + rest)

if (sum % 2 === 0) {
  alert("A soma dos dois números é par.");
} else {
  alert("A soma dos dois números é ímpar.");
}

if (numberOne === numberTwo) {
  alert("Os dois números inseridos são iguais.");
} else {
  alert("Os dois números inseridos são diferentes.");
}
