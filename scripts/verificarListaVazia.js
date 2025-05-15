// tirar a mensagem de "Não há nenhum item na lista no momento." assim que um item e adicionado na lista
const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia')

function verificarListaVazia(listaDeCompras){
    const itensDaLista = listaDeCompras.querySelectorAll('li');
    if (itensDaLista.length == 0) { //length significa a quantidade (apenas se utiliza em Listas)
        mensagemListaVazia.style.display = 'block';
    } else {
        mensagemListaVazia.style.display = 'none';
    }
}

export default verificarListaVazia;