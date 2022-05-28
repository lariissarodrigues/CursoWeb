//Outras formas de se criar uma função 
 
//armazemando em uma variavel: 
 

const soma = function (a, b){ 
    return a + b


}

console.log(soma(2, 2))




//Usando o metodo arrow 

const sub = (c, d) => { 
    return c - d
}

console.log(sub(3, 3))

//Retorno implicito/arrow 

const mult = (e, f) => e * f
  
console.log(mult(3, 3))
