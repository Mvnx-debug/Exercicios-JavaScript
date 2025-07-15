class person {
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`meu nome é ${this.name} e minha idade é ${this.idade}`)
    }
};

const marcos = new person('Marcos', 23 );

console.log(marcos);