function Calc(){
    var Quant = document.getElementById('quantidade_produto').value;
    var Valor = document.getElementById('valor_produto').value;
    var PrecoTotal = parseInt(Quant) * parseFloat(Valor);
    document.getElementById('PrecoTotal').innerHTML=PrecoTotal+" R$"
}

