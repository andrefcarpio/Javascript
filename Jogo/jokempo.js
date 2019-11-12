/**
 * Jokenpo
 * @author André Carpio
 * 
 */
let player
let Cpu = Math.floor((Math.random() * 3) + 1)

function jogar() {
    if (document.getElementById("pedra").checked === true) {
        player = 1
    }

    else if (document.getElementById("papel").checked === true) {
        player = 2
    }

    else if (document.getElementById("tesoura").checked === true) {
        player = 3
    }
    else{
    player = 0
    }

    switch (Cpu) {
        case 1:
            (document.getElementById("pc").src = 'pcpedra.png')
            break

        case 2:
            (document.getElementById("pc").src = 'pcpapel.png')
            break

        case 3:
            (document.getElementById("pc").src = 'pctesoura.png')
            break
    }
    if ((player === 1 && Cpu === 3) || (player === 2 && Cpu === 1) || (player === 3 && Cpu === 2)) {
        document.getElementById('resultado').innerText = "Jogador Venceu"
    }

    else if ((Cpu === 1 && player === 3) || (Cpu === 2 && player === 1) || (Cpu === 3 && player === 2)){
        (document.getElementById('resultado').innerText = "Computador Venceu")
    }
    else if (player === 0 ) {
        (document.getElementById("pc").src = 'pc.png')
        document.getElementById('resultado').innerText = "Jogador seleciona essa porra"
    }
    else {
        (document.getElementById('resultado').innerText = "Empate")
    }


}

function resetar(){
    (document.getElementById("pc").src = 'pc.png')
    (document.getElementById('resultado').innerText = "")
}

