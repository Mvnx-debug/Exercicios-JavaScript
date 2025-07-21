class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        return `Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            return "Saldo insuficiente";
        }
        this.saldo -= valor;
        return `Saque de R$ ${valor.toFixed(2)} realizado. Novo Saldo: R$ ${this.saldo.toFixed(2)}`;
    }

    transferir(valor, contaDestino) {
        if (valor <= 0) {
            return "Valor de transferência inválido!";
        }
        if (this.saldo < valor) {
            return "Saldo insuficiente para transferência!";
        }
        this.saldo -= valor;
        contaDestino.saldo += valor;
        return `Você transferiu R$ ${valor.toFixed(2)} para ${contaDestino.titular}. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
    }

    consultarSaldo() {
        return `Saldo atual: R$ ${this.saldo.toFixed(2)}`;
    }
}

// Testando as operações
const marcos = new ContaBancaria('Marcos', 500);
const isabela = new ContaBancaria('Isabela', 2000);

console.log(marcos.depositar(200));
console.log(marcos.sacar(100));
console.log(marcos.sacar(800));  // Vai mostrar "Saldo insuficiente"
console.log(marcos.consultarSaldo());
console.log(marcos.depositar(1000));

console.log(isabela.consultarSaldo());
console.log(isabela.sacar(200));
console.log(marcos.transferir(200, isabela));  // Agora passando a conta destino