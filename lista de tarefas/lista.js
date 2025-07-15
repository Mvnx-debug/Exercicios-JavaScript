// coleta o elemento do html input id = 'tarefa'
const recebeTarefa = document.getElementById('tarefa');
//coleta o elemento do html button id = 'adicionar'
const botaoAdicionar = document.getElementById('adicionar');
//coleta o elemento do html ul id = 'lista'
const lista = document.getElementById('lista');

//promeve uma ação usando uma função, onde o usuario ao clicar executa um bloco de codigo
botaoAdicionar.addEventListener('click', function(){
    //cria uma variavel texto que recebe o valor digitado do usuario utilizando.value
    const texto = recebeTarefa.value.trim(); // trim é para remover os espaços digitados pelo usuario
    
    //condição se texto tiver espaços ele irá emitir um alerta para o usuario
    if (texto === "") {
        alert('Digite uma tarefa para adicionar a lista');
        return;
    }
    // criar uma variavel com o valor armazenado de criar lista
    const criarLista = document.createElement('li');
   
    //criar lista recebe o conteudo texto que está linkado ao recebeTarefa
    criarLista.textContent = texto; 
   
    //appendChild utilizado para criar um filho no elemento pai lista (ul), e usar a variavel criarLista
    lista.appendChild(criarLista);
   
    //
    recebeTarefa.value = ' ';

});