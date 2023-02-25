const a = Number(prompt("Digite o salario"))
const b = Number(prompt("Digite o porcentual de alteração do salário"))

salarioFinal = a + a*(b/100)

document.write(`o salário final é: ${salarioFinal}`)