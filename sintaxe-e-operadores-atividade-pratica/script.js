function operation() {
    var n1 = Number (prompt("Insira o primeiro número:"))
    var n2 = Number (prompt("Insira o segundo número:"))

    var igualdade;
    if (n1 == n2){
        igualdade = "são iguais"
    } else if (n1 != n2) {
        igualdade = "não são iguais"
    }

    var maiorDez;
    if (n1 + n2 > 10) {
        maiorDez = "maior"
    } else if (n1 + n2 < 10) {
        maiorDez = "menor"
    }

    var menorVinte;
    if (n1 + n2 < 20) {
        menorVinte = "menor"
    } else if (n1 + n2 > 20) {
        menorVinte = "maior"
    }

    console.log(`Os números ${n1} e ${n2} ${igualdade}. Sua soma é ${maiorDez} que 10 e ${menorVinte} que 20.`)
}


operation();