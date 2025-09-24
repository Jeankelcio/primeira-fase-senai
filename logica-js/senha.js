const prompt = require("prompt-sync")()


const senha = prompt(" Digite a senha: ")
const usuario = prompt("Digite o usuario: ")

if(senha === "12345" && usuario === "admin"){
    console.log("tudo certo")  
}else {
    console.log("acesso negado")
}

