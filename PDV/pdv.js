/**
 * PDv
 * @author André Carpio
 */
let vlrTotalDesc

function calcularDesc() {
    let total, desconto, vlrDesconto
    total = Number(frmPdv.txtTotal.value.replace(',', '.'))
    desconto = Number(frmPdv.txtDesc.value.replace(',', '.'))
    vlrDesconto = total * (desconto / 100)
    frmPdv.txtvlrDesc.value = 'R$ ' + vlrDesconto.toFixed(2)
    vlrTotalDesc = total - vlrDesconto
    frmPdv.txtTotalDesc.value = 'R$ ' + vlrTotalDesc.toFixed(2)
}

function calcularTroco() {
    let totalPago, troco

    totalPago = Number(frmPdv.txtpago.value.replace(',', '.'))
    troco = totalPago - vlrTotalDesc
    frmPdv.txtTotaltroco.value = 'R$ ' + troco.toFixed(2)


}