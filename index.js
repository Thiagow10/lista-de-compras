import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById('lista-de-compras')
const botaoAdicionar = document.getElementById('adicionar-item');

botaoAdicionar.addEventListener('click', (evento) => {
    const itemDaLista = criarItemDaLista()
    evento.preventDefault();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
})


verificarListaVazia(listaDeCompras);
