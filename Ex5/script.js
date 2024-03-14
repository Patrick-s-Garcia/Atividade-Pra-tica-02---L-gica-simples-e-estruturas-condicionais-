let peso = parseFloat(prompt("Digite o seu peso."))

let altura = parseFloat(prompt("Digite sua altura em metros."))



let imc = (peso/(altura*altura))




switch(true){
    case imc < 18.5:
    document.write("Você está abaixo da faixa de peso ideal")
    break
    case imc < 24.99:
    document.write("Você está dentro da faixa de peso ideal")
    break 
    case imc > 24.99:
    document.write("Você está acima da faixa de peso ideal")
    break    
}




