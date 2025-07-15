/*<div class="container">
        <h2>Validador de Senha</h2>
        <p>A senha deve conter:</p>
        <ul>
            <li>Mínimo 8 caracteres</li>
            <li>Pelo menos 1 número</li>
        </ul>
        
        <input type="password" id="senha" placeholder="Digite sua senha">
        <button id="validar">Validar Senha</button>
        <p id="mensagem"></p>
    </div>*/

const senhaInput = document.getElementById('senha');
const mensagem = document.getElementById('mensagem');
const botaoValidar = document.getElementById('validar');

botaoValidar.addEventListener('click', function(){
    const senhaUsuario = senhaInput.value;
    if (senhaUsuario.length >= 8 && /\d/.test(senhaUsuario)){
        mensagem.textContent = 'senha válida';
        mensagem.className = 'válida';
    } else {
        mensagem.textContent = 'senha inválida, a senha deve conter 8 caracteres inlcuindo 1 número.';
    }
});