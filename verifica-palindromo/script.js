function verificaPalindromo(nome){
    var nomeSplitado = nome.split("")
    var nomeReversoSplitado = nomeSplitado.reverse()
    var nomeReversoJunto = nomeReversoSplitado.join("")

    if (nomeReversoJunto == nome){
        console.log("É um palindromo!")
    } else {
        console.log("Não é um palíndromo.")
    }

}

verificaPalindromo("ovo");
verificaPalindromo("amar");