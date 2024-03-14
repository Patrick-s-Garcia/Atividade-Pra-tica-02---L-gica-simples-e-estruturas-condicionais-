let valor1 = parseFloat(prompt("Digite um valor."))

let valor2 = parseFloat(prompt("Digite outro valor."))

let operador = prompt("Digite um operador matematico. ( somar , subtrair , dividir , multiplicar )").toLocaleLowerCase()

let somar =(valor1 + valor2)
let subtrair = (valor1 - valor2)
let dividir = (valor1 / valor2)
let multiplicar = (valor1 * valor2)


switch (operador){
    case "somar":
        document.write(`O resultado do calculo é ${somar}`)
        break
    case "subtrair":
        document.write(`O resultado do calculo é ${subtrair}`)
        break
    case "dividir":
        document.write(`O resultado do calculo é ${dividir}`)
        break
    case "multiplicar":
        document.write(`O resultado do calculo é ${multiplicar}`)
        break
    default :
        document.write("Digite um operador valido.")

}



















// switch(true){
//     case imc < 18.5:
//     // document.write("Você está abaixo da faixa de peso ideal"+a)
//     console.log("Você está abaixo da faixa de peso ideal"+a)
//     break
//     case imc < 24.99:
//     document.write("Você está dentro da faixa de peso ideal"+a)
//     console.log("Você está dentro da faixa de peso ideal"+a)
//     break 
//     case imc > 24.99:
//     document.write("Você está acima da faixa de peso ideal"+a)
//     console.log("Você está acima da faixa de peso ideal"+a)
//     break    
// }




