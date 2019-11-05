/**
 * Estudo do DOM
 * Estudo da Função Com passagem de parametros
 * Criado por:
 * @author André Carpio
 */
/*
//Sem passagem de parametros
function ligar() {
    document.getElementById('lamp').src ='on.jpg'
}

function desligar() {
    document.getElementById('lamp').src ='off.jpg'
}*/


//Sem passagem de parametros

let recebe

function controlar(recebe) {
    if (recebe == 1) {
        document.getElementById('lamp').src = 'on.jpg' 
    }
    else {
        document.getElementById('lamp').src = 'off.jpg' 
    }

}

