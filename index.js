import readlineSync from 'readline-sync'

let valor = readlineSync.question('Informe o valor: ')

let porcentagem = readlineSync.question('Informe a porcentagem: ')

valor = Number(valor)
porcentagem = Number(porcentagem)

let valorPorcentagem = valor*porcentagem/100
let valorComJuros = valor + valorPorcentagem
let valorComDesconto = valor - valorPorcentagem


console.log(`${valor.toFixed(2)} com ${porcentagem.toFixed(2)}% de é ${valorComDesconto.toFixed(2)}`)
console.log(`${valor.toFixed(2)} com ${porcentagem.toFixed(2)}% de juros é ${valorComJuros.toFixed(2)}`)