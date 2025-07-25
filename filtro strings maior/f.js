const lista = ['casa', 'carro', 'bicicleta', 'onibus'];


function filtroString(lista){
    const resultado = [] // para armazenar a lista com maiores de 5 caract
    for (let i = 0; i < lista.length; i++) { //percorre toda lista
        if(lista[i].length > 5){ // se palavra na posição i > 5 entao faça isso
            resultado.push(lista[i]); //empurra a palavra i para o array resultado 
        }
        
    }
    return resultado; //retorna o resultado
  

};
console.log(filtroString(lista));// imprima a lista com palavras  > 5 