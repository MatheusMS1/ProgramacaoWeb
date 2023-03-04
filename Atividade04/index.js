import PromptSync from "prompt-sync"
import chalk from 'chalk'
const prompt = PromptSync()

let valores = new Array()
let soma = 0

const qntValores = (Number(prompt(chalk.blue("Digite a quantidade de valores desejada: "))))
for(let i = 0; i < qntValores; i++){
    valores[i] = Number(prompt(chalk.bgGray(`Digite o valor ${i + 1}: `)))
    soma = soma + valores[i]
}

let media = soma / qntValores

console.log(chalk.green.bold(`A media dos valores eh: ${media}`))