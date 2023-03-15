class Estudante { //Criando classe estudante
    nome
    email
    RA
    curso
    disciplinas
}

estudante1 = new Estudante  //Instânciando estudante1
estudante2 = new Estudante  //Instanciando estudante2

//Atribuindo valores a os atributos 
estudante1.nome = 'Marcos Alonso'
estudante1.email = 'marcos.al@fatec'
estudante1.RA = 10501120115
estudante1.curso = 'Analise e desenvolvimento de sistemas'
estudante1.disciplinas = ['programacao web','estrutura de dados','gestao de projetos']

estudante2.nome = 'Alexandre Souza'
estudante2.email = 'alexandre.souza@fatec'
estudante2.RA = 10501120152
estudante2.curso = 'Analise e desenvolvimento de sistemas'
estudante2.disciplinas = ['programacao web','estrutura de dados','ingles IV','sistemas operacionais','IHC']

console.log(estudante1)
console.log(estudante2)
