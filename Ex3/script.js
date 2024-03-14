let numero = parseFloat(prompt("Digite um numero."))

switch(true) {
    case numero < 0:
    document.write(`O numero ${numero} é negativo.`)
    break
    case numero == 0:
    document.write(`O numero ${numero} é igual a zero.`)
    break
    case numero > 0:
    document.write(`O numero ${numero} é positivo.`)
    break


}

