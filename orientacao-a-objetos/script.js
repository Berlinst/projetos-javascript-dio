class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
      this.agencia = agencia;
      this.numero = numero;
      this.tipo = tipo;
      this.saldo = saldo;
    }
    
    getSaldo(){
      console.log(`Saldo: R$${this.saldo}`)
    }
        
    setSacar(v){
      if(this.saldo < v){
        console.log("Não Autorizado! Saldo Insuficiente")
      } else {
        this.saldo = this.saldo - v  
        console.log(`O valor sacado foi de R$${v}`)
        console.log(`Saldo Atualizado: R$${this.saldo}`)   
      }         
    }
    
    setDepositar(v){
       this.saldo = this.saldo + v 
       console.log(`O valor depositado foi de R$${v}`)
       console.log(`Saldo Atualizado: R$${this.saldo}`)     
    }   
}


class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo, cartaoCredito){
        super(agencia, numero, saldo)
        this.saldo = saldo;
        this.tipo = "Conta Corrente";
        this.cartaoCredito = cartaoCredito;
    }

    getSaldoCredito(){
        console.log(`Saldo:  R$${this.cartaoCredito}`)
    }
          
    setSacarCredito(v){
        this.cartaoCredito = this.cartaoCredito - v  
        console.log(`O valor sacado foi de R$${v}`)
        console.log(`Saldo Atualizado:  R$${this.cartaoCredito}`)     
    }
      
    setDepositarCredito(v){
        this.cartaoCredito = this.cartaoCredito + v 
         console.log(`O valor depositado foi de R$${v}`)
         console.log(`Saldo Atualizado:  R$${this.cartaoCredito}`)     
    } 
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        super(agencia, numero, saldo)
        this.saldo = saldo;
        this.tipo = "Conta Poupança";
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        super(agencia, numero)
        this.tipo = "Conta Universitária";
        this.saldo = saldo;
    }

    setSacar(v){
      if (v >= 500){
        console.log("Não é possível sacar acima de R$500,00!")
      } else if (this.saldo < v) {
        console.log("Não Autorizado! Saldo Insuficiente")
      } else {
        this.saldo = this.saldo - v  
        console.log(`O valor sacado foi de R$${v}`)
        console.log(`Saldo Atualizado:  R$${this.saldo}`) 
      }        
    }
}
  
const gabriel = new ContaBancaria(3614, 12345-6, "Conta Empresarial", 2500)

const paula = new ContaCorrente(2387, 12345-6, "Conta Corrente", 100, 1000)

const laura = new ContaPoupanca(9354, 12345-6, "Conta Poupança", 5000)

const marcos = new ContaUniversitaria(2981, 12345-6, "Conta Universitária", 1500)