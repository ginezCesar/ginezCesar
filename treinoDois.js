/*
Crie uma função chamada calcular que receba três parâmetros: 
dois números e uma operação ("+", "-", "*" ou "/"). A função deve retornar o resultado da operação entre os dois números.
*/

function calcular(num1, num2, operacao){

    if(operacao === "+") return num1 + num2;
    if(operacao === "-") return num1 - num2;
    if(operacao === "*") return num1 * num2;
    if(operacao === "/") return num1 / num2;
    
}

console.log(calcular(1, 1, "+"));
console.log(calcular(1, 1, "-"));
console.log(calcular(1, 1, "*"));
console.log(calcular(1, 1, "/"));