// estudo de herança
function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá")
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    this.retornaSalario = function () { // getter
        return `O salário de ${this.nome} é ${_salario};`
    }

    this.atribuiSalario = function (valor) { // setter
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);

funcionario1.dizOi();
funcionario1.dizCargo();

funcionario1.atribuiSalario('mil');

console.log(funcionario1.retornaSalario());