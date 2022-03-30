let spaceshipName = prompt("Qual é o nome da nave?")

let invertedName = ""

for(let i = spaceshipName.length - 1; i >= 0; i--) {
    if(spaceshipName[i] == "e") {
        break
    }
    invertedName += spaceshipName[i]
}

alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + invertedName)

/* 
//usando for
for(let pos = spaceshipName.length-1; pos >= 0; pos--) {
  if(spaceshipName[pos] == "e") {
        break
  }
  spaceshipNameInverted += spaceshipName[pos]
}


//usando while com ternário
let pos = spaceshipName.length-1
while(pos >= 0) {
  spaceshipName[pos] != "e" ? spaceshipNameInverted += spaceshipName[pos] : pos = 0
  pos--
}


//usando do while
let pos = spaceshipName.length-1
do {
  if(spaceshipName[pos] != "e") spaceshipNameInverted += spaceshipName[pos] 
  else break
  pos--
} while(pos >= 0)



alert("\nNome original da nave: " + spaceshipName + "\nNome após ocultação: " + spaceshipNameInverted)

*/