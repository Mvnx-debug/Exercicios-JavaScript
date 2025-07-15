/* exercicios de logica de programação
pergunte ao usuario dois numeros e some eles
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro numero:  ', (num1) => {
  rl.question('Digite o segundo numero: ', (num2) => {
  const numero1 = parseFloat(num1);
  const numero2 = parseFloat(num2);

  const result = numero1 + numero2;
  
  
  
  console.log(`A soma do numero ${numero1}  + numero ${numero2} é:  ${result}`);
  rl.close();
});
});
*/ /* verificar idade
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual sua idade? ', (repost) => {
  const resposta = parseFloat(repost);

  if (repost >= 18){
    console.log('Você é maior de idade');
  }else{
    console.log('Você é menor de idade')
  }
rl.close();
});
*/ /*/loop de contagem 0 a 100
const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

rl.question('Qual numero para encerrar a sequencia: ', (ii) => {
  let final = parseInt(ii);
   for(let i = 0; i <= final; i++){
  console.log(i);
 }
rl.close();
});
*/
function somar(a,b){
  return a + b;
}
function subtrair(a,b){
  return a - b;
}
function multiplicar(a,b){
  return a * b;
}
function dividir(a,b){
  return a / b;
}
const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
rl.question('Qual a o primeiro numero: ', (num1) => {

  rl.question('Qual o segundo numero: ', (num2) =>{
    const numero1 = parseFloat (num1);
    const numero2 = parseFloat (num2);
rl.question(`Digite o numero que corresponde a operação
  [1]Somar
  [2]Subtrair
  [3]Multiplicar
  [4]Dividir
  [0]Sair`, (escolha) => {
  
  const escolheu = parseInt (escolha);
    if (escolheu == 1){
      const resultado = somar(numero1, numero2);
      console.log('O resultado da soma é: ', resultado);
}
    if (escolheu == 2){
      const resultado = somar(numero1, numero2);
      console.log('O resultado da subtração é: ', resultado);
}
})


 rl.close();
  });
});


