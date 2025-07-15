function coleta() {
    const numero = parseInt(document.getElementById('numero').value);
    return numero; // Retorna diretamente o número, não um objeto
}

function botaoEnviar() {
    const botaoEnviar = document.getElementById('enviar');

    botaoEnviar.addEventListener('click', function() {
        const numeroUsuario = coleta();
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Corrigido os parênteses
        
        if (numeroAleatorio === numeroUsuario) {
            document.getElementById('mensagem').textContent = '🎉 Acertou! O número era ' + numeroAleatorio;
        } else {
            document.getElementById('mensagem').textContent = 'Errou! O número era ' + numeroAleatorio + '. Tente novamente!';
        }
    });
}

// Chama a função para configurar o evento
botaoEnviar();

