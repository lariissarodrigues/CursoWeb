//ao contrario do var o let não ignora blocos de codigo 
//exemplo


let x = 0

{
   let x = 9 
   console.log(x) 
}

console.log(x)

/*resultado: 0, 9 porque o let não ignora os blocos de codigo ou seja, eu posso declarar duas variaveis
com o mesmo nome mas, uma delas tem de está dentro de um bloco de codigo*/
