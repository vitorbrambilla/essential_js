let distance = prompt("Distância em anos luz: ")

let optionList = prompt("Escolha qual medida você quer converter\n\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(km)\n\n(Digite o número da opção desejada")

let chosenConversion
let convertedValue

switch(optionList) {
    case "1":
        chosenConversion = "Parsec(pc)"
        convertedValue = distance * 0.366
        break
    case "2":
        chosenConversion = "Unidade astronômica(AU)"
        convertedValue = distance * 63241,1
        break
    case "3":
        chosenConversion = "Quilômetros(km)"
        convertedValue = distance * (9.5 * Math.pow(10,12))
        break
    default: 
        chosenConversion = "Unidade não identificada"
        convertedValue = "Conversão fora do escopo"
}

alert("Distância em anos luz: " + distance + "\n" + chosenConversion + ": " + convertedValue)