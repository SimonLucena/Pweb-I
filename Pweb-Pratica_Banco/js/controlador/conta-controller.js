class ContaController {
  constructor() {
    this.repositorioContas = new RepositorioContas();
  }

  adicionarConta(conta) {
    this.repositorioContas.adicionar(conta);
  }

  listar() {
    this.repositorioContas.getContas().forEach(conta =>
        this.inserirContaNoHTML(conta)
    );
  }

  inserir(evento) {
    evento.preventDefault();
    let conta = '';
    const elementoNumero = document.querySelector('#numero');
    const elementoSaldo = document.querySelector('#saldo');
    const elementoAniversario = document.querySelector('#dataAniversario');
    const elementoTipo = document.querySelector('#tipoConta');
  
    switch(elementoTipo.value){
      case 'conta':
        conta = new Conta(elementoNumero.value, Number(elementoSaldo.value));
        break;
      case 'conta bonificada':
        conta = new ContaBonificada(elementoNumero.value, Number(elementoSaldo.value));
        break;
      case 'poupança':
        conta = new Poupanca(elementoNumero.value, Number(elementoSaldo.value), Number(elementoAniversario.value));
        break;
    }
    
    this.repositorioContas.adicionar(conta);
    this.inserirContaNoHTML(conta, elementoTipo.value);
  }

  inserirContaNoHTML(conta, tipo) {
    const elementoP = document.createElement('p');
    
    switch(tipo){
      case 'conta bonificada':
        elementoP.textContent = 'Conta Bonificada ' + conta.numero + ': ' + conta.saldo;
        break;
      case 'poupança':
        elementoP.textContent = 'Poupança ' + conta.numero + ': ' + conta.saldo + " Data de criação: " + conta.dataAniversario;
        break;
      default:
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo; 
        break;
    }
    
    const botaoApagar = document.createElement('button');
    botaoApagar.textContent = 'X';

    botaoApagar.addEventListener('click', (event) => {
        this.repositorioContas.remover(conta.numero);
        event.target.parentElement.remove();
    });

    elementoP.appendChild(botaoApagar);
    document.body.appendChild(elementoP);
  }
}
