/**
 * Cáculo da Média
 * @author André Carpio
 */

// Variáveis Globais 

let nota1, nota2, media

function calcular() {
    nota1 = Number(frmMedia.txtNota1.value.replace(",", "."))
    nota2 = Number(frmMedia.txtNota2.value.replace(",", "."))
    media = Number((nota1 + nota2) / 2)
    frmMedia.txtMedia.value = media.toFixed(2)
    }
}