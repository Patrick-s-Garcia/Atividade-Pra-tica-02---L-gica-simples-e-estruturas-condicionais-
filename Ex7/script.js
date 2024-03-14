let valor = parseFloat(prompt("Digite o valor de saque."))

let saldo = 100


if((valor+4.5)<saldo && valor>0){
    if((valor%5)==0){
        saldo = saldo - valor - 4.5
        document.write(`Saque realizado com sucesso, seu novo saldo é de R$${saldo}.`)
        
        }
        else {
            document.write(`Você só pode sacar numeros multiplos de 5, digite um valor valido.`)
        
        }
    }
    else{
        document.write(`Saldo insulficiente para este saque.`)
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




