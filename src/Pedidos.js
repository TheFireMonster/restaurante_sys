function Calc(){
    var Quant = document.getElementById('quantidade_produto').value;
    var Valor = document.getElementById('valor_produto').value;
    var Total = parseInt(Quant) * parseFloat(Valor);
    document.getElementById('total').innerHTML=Total+" R$"
}

