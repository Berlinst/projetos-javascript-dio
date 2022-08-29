function calculadora() {
    const operacao = prompt("Escolha uma operação \n 1- Soma (+) \n 2- Subtração (-) \n 3- Multiplicação (*) \n 4- Divisão Real (/) \n 5- Divisão Inteira (%) \n 6- Potenciação (**)")

    if (!operacao || operacao >= 7) {
        alert("Erro! Operação inválida")
        calculadora();
    } else {
        var n1 = Number(prompt("Insira o primeiro número:"))
        var n2 = Number(prompt("Insira o segundo número:"))
        var resultado;

        if (!n1 || !n2){
            alert("Digite um valor (número) valido!")
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
        
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
        
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
        
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
        
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`)
                novaOperacao();
            }
        
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a = ${resultado}`)
                novaOperacao();
            }
        
            function novaOperacao() {
                var novaOp = prompt("Deseja fazer uma nova operação? \n 1 - Sim \n 2 - Não")
                if (novaOp == 1) {
                    calculadora();
                } else if (novaOp == 2){
                    alert("Até mais! Fim do programa.")
                } else {
                    alert("Digite um número válido!")
                    novaOperacao();
                }
        
            }
        
            if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao();
            } else if (operacao == 3) {
                multiplicacao();
            } else if (operacao == 4) {
                divisaoReal();
            } else if (operacao == 5) {
                divisaoInteira();
            } else if (operacao == 6) {
                potenciacao();
            }

          
        }
            
    }
    
}