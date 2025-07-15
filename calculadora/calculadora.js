function coleta(){
    const numero1 = parseFloat(document.getElementById("num1").value);
        
    const numero2 = parseFloat(document.getElementById('num2').value);
    
    return {numero1, numero2};
}

const botaoSomar = document.getElementById('somar');

botaoSomar.addEventListener('click', function(){
    const dados = coleta();
    
    const result = dados.numero1 + dados.numero2;
    
    document.getElementById('resultado').textContent = `resultado: ${result}`;
});

const botaoSubtrair = document.getElementById('subtrair');

botaoSubtrair.addEventListener('click', function(){
    const dados = coleta();

    const result = dados.numero1 - dados.numero2;

    document.getElementById('resultado').textContent = `resultado: ${result}`;
});

const botaoMultiplicar = document.getElementById('multiplicar');

botaoMultiplicar.addEventListener('click', function(){
    const dados = coleta();

    const result = dados.numero1 * dados.numero2;

    document.getElementById('resultado').textContent = `resultado: ${result}`;
});

const botaoDividir = document.getElementById('dividir');

botaoDividir.addEventListener('click', function(){
    const dados = coleta();
    
    const result = dados.numero1 / dados.numero2;

    document.getElementById('resultado').textContent = `resultado: ${result}`;

});