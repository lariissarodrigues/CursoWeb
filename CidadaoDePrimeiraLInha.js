//funçao com outra funçao dentro do seu escopo
function teste(a ,b){ 
    return function (c){
        console.log(a + b + c)
    }
}
teste(2, 2)(2) //R: 9


//Função literal - forma padrão

function literal (){
//não vai retornar nada porque não tem nenhuma instrução 
}

//Função literal - forma padrão (rertonando algo)

function literal2 (x, y){ 
    return x + y 
}

console.log(literal2(2, 3))

//Funçao dentro de uma variavel 
const funcao = function (a){ return a}
console.log(funcao("Larissa")) 
//Retorna o valor "Larissa"