class Pessoas{
    constructor(nome, idade, saldo){
        this.nome = nome;
        this.idade = idade;
        this.saldo = saldo;
        this.historico = []
    };

    depositar(valor){
        this.saldo += valor;
        this.historico.push(`Deposito de + R$${valor} realizado`)
        return `Deposito de R$ ${valor.toFixed(2)} realizado com sucesso. Novo Saldo R$ ${this.saldo.toFixed(2)}`
    };
    consultarSaldo(){
        return `O cliente ${this.nome} tem R$${this.saldo}`
    };
    historico(){
        return this.historico;
    }

    comprar(Produtos){
        if(this.saldo >= Produtos.preco){
            this.saldo -= Produtos.preco;
            return `${this.nome} comprou ${Produtos.desc} no valor de R$ ${Produtos.preco}. Novo saldo R$ ${this.saldo}`
        } else{
            const falta = Produtos.preco - this.saldo;
            return `Saldo insuficiente falta R$ ${(falta.toFixed(2))}`;
        };
    };
    
};
class Produtos{
    constructor(desc, preco){
        this.desc = desc;
        this.preco = preco;
    }
}
const marcos = new Pessoas('Marcos', 23, 500);
const ps5 = new Produtos('Playstation 5', 2500);

console.log(marcos.consultarSaldo());
console.log(marcos.depositar(2000));
console.log(marcos.comprar(ps5));
console.log(marcos.depositar(2000));
console.log(marcos.depositar(2000));
console.log(marcos.depositar(2000));
console.log(marcos.historico);
console.log(marcos.consultarSaldo());