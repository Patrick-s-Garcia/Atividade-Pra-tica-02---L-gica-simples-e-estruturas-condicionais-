let custoDeFabrica = parseFloat(prompt("Digite o custo de fabrica do veículo."))

let valor = custoDeFabrica+(custoDeFabrica*0.28)+(custoDeFabrica*0.45)


document.write(`O valor final do carro é de R$${valor.toFixed(2)}.`)




