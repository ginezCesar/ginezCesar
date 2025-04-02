/*
Crie uma função chamada contarVogais que receba uma string e retorne a quantidade de vogais (a, e, i, o, u) que existem nela.
*/

function contarVogais(texto){
    
    let vogais = "aeiouAEIOU"
    let contador = 0

    for (let char of texto){
        if (vogais.includes(char)){
            contador++;
        }
    }

    return contador;
}
console.log(contarVogais("javascript")); // Saída esperada: 3
console.log(contarVogais("Cesar")); // Saída esperada: 2
console.log(contarVogais("Backend")); // Saída esperada: 2