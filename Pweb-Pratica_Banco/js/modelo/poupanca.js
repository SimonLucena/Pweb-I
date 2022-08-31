class Poupanca extends Conta {
  constructor(numero, saldo, dataAniversario) {
    super(numero, saldo);
    this.dataAniversario = dataAniversario;//DATA QUE O BANCO INCREMENTA À POUPANÇA
  }

  creditar(valor) {
    super.creditar(valor * 1.1);
  }
} 