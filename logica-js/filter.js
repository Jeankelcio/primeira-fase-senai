const numeros = [23,5,8,10]

const numerosMaioresQueCinco = numeros.filter(valor =>5)

console.log(numerosMaioresQueCinco)


const numerosPares = numeros.filter(valor => valor % 2 === 0)

console.log(numerosPares)

const usuarios = [
    {nome:"João",idade:52},
    {nome:"Maria",idade:13},
    {nome:"Pedro",idade:29}
]


const usuariosMenoresDeidade = usuarios.filter(usuario => usuario.idade<18)

console.log(usuariosMenoresDeidade)




// const idadesUsuarios = usuarios.map(usuario => usuario.idade)
// console.log(idadesUsuarios);

// for(let idade of idadesUsuarios){
//     console.log(idade)
// }



