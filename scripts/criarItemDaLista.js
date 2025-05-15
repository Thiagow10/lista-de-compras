import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById('input-item'); 
let contador = 0;

export function criarItemDaLista(){

    if (inputItem.value == '') { //importante colocar o value pois demonstra o valor do input
        alert('Por favor, insira um item');
        return; //o return, neste caso, retornara nada, e assim, ele vai sair fora do if
    }

    const itemDaLista = document.createElement('li'); //o createElement significa que ele esta criando um elemento com base na tag do HTML

    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista-item-container');//o classList serve para puxar uma class do elemento do HTML


    //adicionando elementos na lista
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = "checkbox"; // a mesma sintaxe do HTML, e neste caso, atribuindo-o para o JS
    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement('p');
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener('click', function(){
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = 'line-through';//serve para deixar um risco quando o checkbox estiver selecionado
        } else {
        nomeItem.style.textDecoration = 'none';
        }
    })

    //anexando elementos
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();
    
    const itemData = document.createElement('p');
    itemData.innerHTML = dataCompleta;
    itemData.classList.add('texto-data');

    itemDaLista.appendChild(itemData);

    return itemDaLista;
}