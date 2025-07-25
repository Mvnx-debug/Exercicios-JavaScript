let soma = 0;
const numeros = [2,2,2];

function array(numeros){
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
     
        
    };
    return soma;
};
console.log(array(numeros));
