let idade = parseFloat(prompt("Digite sua idade."))

let peso = parseFloat(prompt("Digite seu peso."))


if(idade <= 12){
    document.write("A categoria do atleta é infantil")
}
else if(idade <= 16 && peso <= 40){
    document.write("A categoria do atleta é juvenil leve")
}
else if(idade <= 16 && peso > 40){
    document.write("A categoria do atleta é juvenil pesado")
}
else if(idade <= 24 && peso <= 45){
    document.write("A categoria do atleta é senior leve")
}
else if(idade <= 24 && peso > 45 && peso <= 60){
    document.write("A categoria do atleta é senior medio")
}
else if(idade <= 24 && peso > 60){
    document.write("A categoria do atleta é senior pesado")
}
else if(idade > 24){
    document.write("A categoria do atleta é veterano")
}

















