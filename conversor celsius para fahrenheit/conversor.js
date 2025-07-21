const grauCelsius = document.getElementById('celsius');
const botaoConverter = document.getElementById('converter');


botaoConverter.addEventListener('click', function(){
    const celsius = parseFloat(grauCelsius.value);

    if (isNaN(celsius)){
        alert('Digite um valor válido');
        return;
    };

    const f = celsius * 1.8 + 32;

    document.getElementById('fahrenheit').textContent = f + 'Fº';
});