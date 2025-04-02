/*
Crie uma função chamada boasVindas que receba um nome como parâmetro e retorne a mensagem:
"Olá, [nome]! Seja bem-vindo!"
Se nenhum nome for passado, a função deve usar "Visitante" como padrão.
*/


function boasVindas(nome = "Visitante"){
  
    return `Bem vindo ${nome}`;

}
console.log(boasVindas('Cesar'));
console.log(boasVindas());