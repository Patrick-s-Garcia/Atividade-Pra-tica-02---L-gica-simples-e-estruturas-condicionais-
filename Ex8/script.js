let velocidade = parseFloat(prompt("Digite a velocidade do carro."))



if(velocidade > 80){
    let multa = (velocidade - 80) * 5
    document.write(`Você foi multado. <br> O valor da multa é de R$${multa}.`)
}
else {
    document.write("Você esta dentro do limite de velocidade.")
}

















