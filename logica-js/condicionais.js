






const prompt = require("prompt-sync")()
const frequencia = prompt(" Digite a frequencia: ")

const notaFinal = prompt("Digite a nota final: ")

if(notaFinal >=7 && frequencia >=8){
    Console.log("aprovado")
}else{
    console.log("reprovado")
}