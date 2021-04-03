var idade = 69
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota`)
} else  if (idade < 18 ||idade > 65) {
    console.log(`Portanto, o voto é opcional`)
} else {
    console.log (`Portanto, o voto é obrigatório`)
}