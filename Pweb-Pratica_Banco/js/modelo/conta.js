class Conta {
  constructor(numero, saldo=0) {
    this.numero = numero;
    this.saldo = saldo;
  }

  debitar(valor){
    if (this.saldo >= valor){
      this.saldo -= valor;
    }
  }

  creditar(valor){
    this.saldo += valor;
  }

  transferir(destino, valor){
    this.debitar(valor);
    destino.creditar(valor);
  }
}
