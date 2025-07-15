const dadoUsuario = document.getElementById('numero');
const calcula = document.getElementById('gerar');

calcula.addEventListener('click', function(){
    const num = parseFloat(dadoUsuario.value);
    
    // Validação (bônus)
    if (isNaN(num)) {
        alert("Por favor, digite um número válido!");
        return;
    }
    
    let tabuada = '';
    
    for (let i = 0; i <= 10; i++) {
        const resultado = num * i;  // Renomeei para 'resultado' (mais claro)
        tabuada += `${num} × ${i} = ${resultado}<br>`;  // Use × em vez de x
    }
    
    document.getElementById('tabuada').innerHTML = tabuada;
});