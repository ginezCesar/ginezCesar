/* 
Crie uma função chamada maiorNumero que receba três números como parâmetros e retorne o maior deles.
*/

function maiorNumero(n1, n2, n3){
    
    return Math.max(n1, n2, n3)
    
    /*
    if(n1 > n2 && n1 > n3) return n1
    if(n2 > n1 && n2 > n3) return n2
    if(n3 > n1 && n3 > n2) return n3
    */

}
console.log(maiorNumero(1, 2, 3)) // n3
console.log(maiorNumero(1, 5, 3)) // n2
console.log(maiorNumero(10, 10, 10)) // n1