/*const numeros = [7, 14, 21, 28, 35]

const resultados = numeros
    .filter(num => num > 20) //filtra os numeros da lista que são maiores que 20 
    .map(num => num / 7); divide os numeros filtrados utilizando map para modificar lista e divide por 7
    
    console.log(resultados);

    const numeros = [7, 14, 21, 28, 35];

    const resultados = numeros
    .filter(function(num){
        return num > 20
        
    }) // filtra os numeros da lista que são maiores que 20

    .map(function(num){
        return num / 7;}
    );
    console.log(resultados);*/

    const numeros = [2, 3, 1];
    console.log(numeros[0]); // pega o numero que corresponde a primeira posição da lista

    const resultados = numeros
    .reduce((a, b,)=> a + b ); // faz o calculo sendo a (acumulador) e b (num), a + b

    const media = resultados / numeros.length;// resultados = numeros (6) / numeros.length(le quantos numeros possui na lista, no caso 2) = 2

    console.log(resultados); //printa na tela
    
    console.log(media); //printa na tela
