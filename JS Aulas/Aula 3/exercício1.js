const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosPares = [];
const numerosImpares = [];

for (let i = 0; i < lista.length; i++) {
  const numero = lista[i];
  
  if (numero % 2 === 0) {
    numerosPares.push(numero)
  } else {
    numerosImpares.push(numero)
  }
}

console.log('Lista de números: ' + lista);
console.log('Números Pares: ' + numerosPares);
console.log('Números Impares: ' + numerosImpares) 

