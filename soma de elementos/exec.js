function somaArray(arr) {
    let soma = 0; 
    for (let num of arr){
        soma += num;
    }
    return soma;
}
    console.log(somaArray([1,2,3,]));

const palavra = 'abcde'
for (let i = 0; i < palavra.length; i++) {
    console.log(`o indice ${i} corresponde a letra ${palavra[i]}`);
    
} 

const contagem = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${contagem} * ${i} = ${contagem * i}`);
}

