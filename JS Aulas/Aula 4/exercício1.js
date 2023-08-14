// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)

function Sorteio() {
    const numerosSorteados = new Set();
    
    while (numerosSorteados.size < 6) {
        const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
        numerosSorteados.add(numeroAleatorio);
    }
    
    return Array.from(numerosSorteados);
}

function main() {
    const numSorteios = parseInt(prompt("Quantos sorteios você deseja realizar?"));
    
    for (let i = 1; i <= numSorteios; i++) {
        const resultado = Sorteio();
        console.log(`Sorteio ${i}: ${resultado.join(', ')}`);
    }
}

main();