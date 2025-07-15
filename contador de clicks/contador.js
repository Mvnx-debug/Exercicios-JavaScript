let cont = 0;
const botaoClicar = document.getElementById('clicar');
const botaoZerar = document.getElementById('zerar');

botaoClicar.addEventListener('click', function(){
    cont ++;

    document.getElementById('total').textContent = cont;
});
botaoZerar.addEventListener('click', function(){
    cont = 0;

    document.getElementById('total').textContent = cont;
});