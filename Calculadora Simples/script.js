
function inserir(numeroeoperacao){
    let aux;
    aux = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = aux + numeroeoperacao;
}

function zerarcalculadora(){
    document.getElementById('resultado').innerHTML = "";
}

function calcularresultado(){
    let calcular = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(calcular);
}