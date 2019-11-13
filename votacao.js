/**
 * Indicar a faixa de idade para votação
 * @author André Carpio
 */

function avaliar() {
    idade = Number(frmIdade.txtIdade.value.replace(",", "."))
    if (idade =='') {
        alert("Informe a idade no Campo")

    }
    else if (idade < 16) {
        (document.getElementById('resultado').innerText = "Proibido Votar")
        (document.getElementById('voto').src = "probido.jpg")
    }
    else if (idade >= 18 && idade < 70) {
        (document.getElementById('resultado').innerText = "Voto Obrigarório")
        (document.getElementById('voto').src = "obrig.jpg")
    } else {
        (document.getElementById('resultado').innerText = "Voto Facultativo")
        (document.getElementById('voto').src = "facult.jpg")
    }



}

function resetar() {
    (document.getElementById('resultado').innerText = "")
    (document.getElementById('voto').src = "")
}
