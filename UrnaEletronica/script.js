function inserir(valor) {

    if (document.getElementById("campo1").value == "") {

        document.getElementById("campo1").value = valor;

    } else if (document.getElementById("campo2").value == "") {

        document.getElementById("campo2").value = valor;

        let aux = document.getElementById("campo1").value + document.getElementById("campo2").value;
        switch(aux){
            case '22':
                imagem.src="https://veja.abril.com.br/wp-content/uploads/2022/09/redetv-redetvnews-jair-bolsonaro.jpg";
            break;
            case '13':
                imagem.src="https://i.em.com.br/Xlc2RQ9YW0egiEJjebef3grCwOY=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/09/12/1393170/luiz-inacio-lula-da-silva-pt_1_45200.jpeg";
            break;
            case '69':
                imagem.src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/03/24/mendigo_planaltina2-20735587.jpg";
            break;
        }
    }  
    
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    imagem.src="https://blog-static.infra.grancursosonline.com.br/wp-content/uploads/2015/11/03181038/brasao-da-republica.jpg";
}

function branco() {
    let confirmaBranco = confirm("Tem certeza que deseja votar em branco?");
    if (confirmaBranco === true){
        alert("Voto em branco")
    } else {
        alert("Voto cancelado")
    }

}

function votar() {
    let numVoto = document.getElementById("campo1").value + document.getElementById("campo2").value;
    switch(numVoto){   
        case '22':
            if (confirm("Tem certeza que deseja votar no candidato Bolsonaro?") === true){
                alert("Confirmado voto no candidato Bolsonaro número " + numVoto)
            } else {
                alert("Voto cancelado")
            } break;
        case '13':
            if (confirm("Tem certeza que deseja votar no candidato Lula?") === true){
                alert("Confirmado voto no candidato Lula número " + numVoto)
            } else {
                alert("Voto cancelado")
            } break;
        case '69':
            if (confirm("Tem certeza que deseja votar no candidato Givaldo Alves?") === true){
                alert("Confirmado voto no candidato Givaldo Alves número " + numVoto)
            } else {
                alert("Voto cancelado")
            } break;
        case '00':
            if (confirm("Tem certeza que deseja anular o voto?") === true){
                alert("Voto anulado")
            } else {
                alert("Voto cancelado")
            } break;
        default:
            alert("Candidato não existe")
    }
    
    corrige();
}