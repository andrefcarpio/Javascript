/**
 * Operador Logico 
 * @author André Carpio
 */

let receive
let sw1 = false
let sw2 = false
var itens = $("tabela").remove();


function queb() {
      document.getElementById('lamp').src = "Queb.png"
      document.getElementById('lamp').id = "Quebrada"
      document.getElementById('circ').src = "Circ_Error.png"
      document.getElementById('tabela').remove ='tabela'
}
function arruma() {
       document.getElementById('Quebrada').id = "lamp"
    
    if (sw1 == true && sw2 == true) {
        document.getElementById('lamp').src = "on.jpg"
        document.getElementById('circ').src = "circ_and_lok.png"

    } else if (sw1 == true && sw2 == false) {
        document.getElementById('lamp').src = "off.jpg"
        document.getElementById('circ').src = "circ_and_sw1.png"
    }
    else if (sw1 == false && sw2 == true) {
        document.getElementById('lamp').src = "off.jpg"
        document.getElementById('circ').src = "circ_and_sw2.png"
    }
    else {
        document.getElementById('lamp').src = "off.jpg"
        document.getElementById('circ').src = "circ_and.png"
    }
 
}



function sw(receive) {

    if (receive == 1 && sw1 == false) {
        document.getElementById('sw1').src = "swon.png"
        sw1 = true
    } else if (receive == 1 && sw1 == true) {
        document.getElementById('sw1').src = "swoff.png"
        sw1 = false
    }


    else if (receive == 2 && sw2 == false) {
        document.getElementById('sw2').src = "swon.png"
        sw2 = true
    } else {
        document.getElementById('sw2').src = "swoff.png"
        sw2 = false
    }

    if (sw1 == true && sw2 == true) {
        document.getElementById('lamp').src = "on.jpg"
        document.getElementById('circ').src = "circ_and_lok.png"

    } else if (sw1 == true && sw2 == false) {
        document.getElementById('lamp').src = "off.jpg"
        document.getElementById('circ').src = "circ_and_sw1.png"
    }
    else if (sw1 == false && sw2 == true) {
        document.getElementById('lamp').src = "off.jpg"
        document.getElementById('circ').src = "circ_and_sw2.png"
    }
    else {
        document.getElementById('lamp').src = "off.jpg"
        document.getElementById('circ').src = "circ_and.png"
    }
}
        
