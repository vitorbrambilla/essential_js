let pilotName = prompt("Qual é o seu nome, piloto?")
alert("Olá, " + pilotName + " seja bem vindo")

let velocity = 0;

let desiredSpeed = prompt("A que velocidade você gostaria de acelerar a nave?") 
let confirmation = confirm("Você realmente quer atualizar a velocidade da nave? Ela irá para " + desiredSpeed + " km/s")

if (confirmation == true) {
    velocity = desiredSpeed
}

if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
    alert("Você está devagar. Podemos aumentar mais.")
} else if(velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if(velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}
alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")

alert("Nome do Piloto: " + pilotName + "\n\nVelocidade atual: " + velocity)