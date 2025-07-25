/*
Escreva uma função que recebe um número e retorna "Fizz" se o número for divisível por 3,
 "Buzz" se for divisível por 5, "FizzBuzz" se for divisível por ambos, 
ou o próprio número caso contrário.
*/

function fizzBuzz(numero){
    if (numero % 3 === 0){
        return 'Fizz'
    }else if(numero % 5 === 0){
        return 'Buzz'
    }else if (numero % 3 && numero % 5 === 0){
        return 'FizzBuzz'
    }
}

console.log(fizzBuzz(15));