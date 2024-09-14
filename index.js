// PRINT = console.log

console.log("Teste de console.log");

// VARIAVEL MUTÁVEL = let + NOME
// VARIAVEL IMUTÁVEL = const + NOME
// NOVO ESCOPO = { + NOME + }
// METODO DE OBJETO = NOME + . + NOME
// FUNÇÃO = function + NOME + ( + PARAMETROS + ) + { + COMANDOS + }



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

let meta = {
    value : 'Ler um livro por mês',
    checked : false
}

console.log(meta.value + " <- Funcionou \n");

const criarMeta = () => {};