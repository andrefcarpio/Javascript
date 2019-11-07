/**
 * Cáculo da Média
 * @author André Carpio
 */

// Variáveis Globais 

let eta, gaso, valida

function calculo() {
    eta = Number(fmrSimulador.txtEtanol.value.replace(",","."))
    gaso = Number(fmrSimulador.txtGaso.value.replace(",","."))
    valida = gaso/eta

   
    if(valida < 0.7) {
        document.getElementById("status").src="etanol.png"}
        else
        document.getElementById("status").src="gasolina.png"}

        function reiniciar() {
            document.getElementById("status").src = "neutro.png";
        }
        
 
        

    






 