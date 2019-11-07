/**
 * Operador Logico 
 * @author André Carpio
 */

let receive
let sw1 = false
let sw2 = false
let sw3 = false
let broken = false

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

    if (receive == 3) {
        document.getElementById("lamp").src = "Queb.jpg"
        broker = true
      
    }

    
    if (broker ==false) {
        if (sw1 == true || sw2 == true) {
            document.getElementById('lamp').src = "on.jpg"
            document.getElementById('circ').src = "circ_or.png"
        }
        else {
            document.getElementById('lamp').src = "off.jpg"
            document.getElementById('circ').src = "circ_or.png"

        }
    }
}

