let distanceInLy = prompt("Digite a distancia em anos luz")

let chosenOption = prompt("Escolha qual medida você quer converter\n\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(km)\n\n(Digite o número da opção desejada")

let chosenUnity
let convertedDistance 

switch(chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLy * 0.336601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanceInLy * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceInLy * 9.5 * Math.pow(10, 12) // Math.pow var elevar 10 à 12
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert("Distância em anos luz: " + distanceInLy + "\n" + chosenUnity + ": " + convertedDistance)