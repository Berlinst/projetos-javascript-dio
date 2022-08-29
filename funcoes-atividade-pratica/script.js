// PRIMEIRA ATIVIDADE: ALUNOS APROVADOS

const alunos = [
    {
        nome: "João",
        nota: 5,
    },
    {
        nome: "Marta",
        nota: 8
    },
    {
        nome: "Carlos",
        nota: 2
    },
    {
        nome: "Júlia",
        nota: 10
    }
]



function alunosAprovados(array, media){
    let aprovados = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].nota > media){
            aprovados.push(array[i])
            console.log(`Parabéns! ${array[i].nome} foi aprovado(a) com nota final de ${array[i].nota}`)
            
        } else {
            console.log(`Atenção! ${array[i].nome} foi reporvado(a) com nota final de ${array[i].nota}`)
        }
    }
}


alunosAprovados(alunos, 6)



// SEGUNDA ATIVIDADE: USANDO THIS

const pessoa1 = {
    nome: "Paulo",
    idade: 15,
}

const pessoa2 = {
    nome: "Maria",
    idade: 36,
}

const pessoa3 = {
    nome: "Gabi",
    idade: 5,
}

const pessoa4 = {
    nome: "Rafael",
    idade: 50,
}


function calculaIdade(anos) {
    console.log(`Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`)
}

function calculaMaioridade(array) {
    if(this.idade >= 18){
        console.log(`${this.nome} é maior de idade!`)
    } else {
        console.log(`${this.nome} ainda não é maior de idade!`)   
    } 
}

calculaIdade.call(pessoa1, 4)
calculaMaioridade.call(pessoa1)

calculaIdade.call(pessoa2, 10)
calculaMaioridade.call(pessoa2)

calculaIdade.call(pessoa3, 23)
calculaMaioridade.call(pessoa3)

calculaIdade.call(pessoa4, 8)
calculaMaioridade.call(pessoa4)






