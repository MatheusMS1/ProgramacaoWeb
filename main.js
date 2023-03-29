const express = require('express')
const app = express()

app.use(express.json())

class Pessoa {
    constructor(nome, email,idade,hobby){
        this.nome = nome
        this.email = email
        this.idade = idade
        this.hobby = hobby
    }
}

app.get('/r1', (req, res) => {
    let pessoa1 = new Pessoa('Matheus', 'matheus.souza@fatec.com', "22", ['Jogar futebol', 'estudar', 'assistir Lives'])
    res.json(pessoa1)
})
    

app.get("/r2", (req,res) => {
    let pessoa1 = new Pessoa('Matheus', 'matheus.souza@fatec.com', "22", ['jogar futebol', 'estudar', 'assistir Lives'])
    let pessoa2 = new Pessoa("Fulano", "fulanodetal@hotmail.com", "13", ['pedalar', 'assistir TV', 'jogar futebol'])
    pessoa3 = new Pessoa("Jefferson", "jefferson@senai.com.br", "20", ['estudar', 'cuidar do carro', 'meditar'])
    res.json([pessoa1,pessoa2,pessoa3])
})

app.listen(3000, () =>{console.log("Servidor Rondando na porta 3000")
})