let nomesSorteados = [];


function exibirListaDeAmigos(nomes){
    let lista = document.querySelector('.name-list');
    lista.innerHTML = '';

    for(let i=0; i<nomesSorteados.length; i++){
        if (nomesSorteados.length === 0) {
            // Se a lista estiver vazia, você pode exibir uma mensagem ou não fazer nada
            console.log("Não há nomes para exibir.");
            return; // Sai da função para evitar processamento desnecessário
        } else {

            let item = document.createElement('li');
            item.textContent = nomesSorteados[i];
            document.querySelector('input').value = '';
            lista.appendChild(item);

        }
        
    }
}

function adicionarAmigo(){
    let nomeAdicionado = document.querySelector('input').value;
    if (nomeAdicionado == ''){
        alert('Por favor, insira um nome válido!'); // teste temporário
        
    } else if (nomesSorteados.includes(nomeAdicionado)) {

        alert('Este amigo já foi adicionado!'); // teste temporário
        
    } else {
        nomesSorteados.push(nomeAdicionado);
        console.log(nomesSorteados);
        exibirListaDeAmigos(nomesSorteados);
    }
}

function sortearAmigo(){
    let indiceSorteado = Math.floor(Math.random() * nomesSorteados.length);
    console.log(indiceSorteado);

    //alert('Amigo Secreto:'+ nomesSorteados[indiceSorteado]); // teste temporário
    let nomeSorteado = document.querySelector('.result-list');
    let item = document.createElement('li');
    item.textContent = 'Amigo Secreto:'+ nomesSorteados[indiceSorteado];
    nomeSorteado.appendChild(item);

    nomesSorteados.splice(indiceSorteado, 1);
}

function limparAmigos() {
    nomesSorteados = [];
    let lista = document.querySelector('.name-list');
    lista.innerHTML = '';
    let resultado = document.querySelector('.result-list');
    resultado.innerHTML = '';
    console.log("A lista foi limpa.");
}
