import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById('lista-de-compras')
const botaoAdicionar = document.getElementById('adicionar-item');


//o addEventListener serve como um 'Ouvinte de Eventos', no caso abaixo, apos o click no botao referente ao input, executa uma funcao, cujo nome abaixo esta como 'evento';
botaoAdicionar.addEventListener('click', (evento) => {
    const itemDaLista = criarItemDaLista()
    evento.preventDefault(); //o preventDefault previne a acao padrao(um exemplo seria a atualizacao da pagina apos um clique)
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
})


verificarListaVazia(listaDeCompras);