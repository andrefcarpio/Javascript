/**
 * Cáculo da Média
 * @author André Carpio
 */

// Variáveis Globais 

let peso, altura, imc

function calcular() {
    peso = Number(frmIMC.txtPeso.value.replace(",","."))
    altura =Number(frmIMC.txtAltura.value.replace(",","."))
    imc = peso/(altura*altura)
    frmIMC.txtIMC.value =imc.toFixed(2)

        
}
