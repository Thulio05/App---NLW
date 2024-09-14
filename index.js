// PRINT = console.log

console.log("Teste de console.log");

// VARIAVEL MUTÁVEL = let + NOME
// VARIAVEL IMUTÁVEL = const + NOME
// NOVO ESCOPO = { + NOME + }

let escrita = "Teste de variável";
let valor = 3
const escritaconstante = "Teste de variável constante";

console.log(escrita + " <- Funcionou \n");	
console.log(escritaconstante + " <- Funcionou \n");	
console.log(escrita + "\nValor definido = " + valor);

{
    const escritaconstante = "Teste de variável constante dentro de um escopo";
    console.log(escritaconstante + " <- Funcionou \n");
}


console.log(escritaconstante + " <- Funcionou \n");