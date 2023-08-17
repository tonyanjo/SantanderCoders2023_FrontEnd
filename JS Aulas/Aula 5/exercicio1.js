const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function converterPara12Horas(horas24) {
    const horas12 = (horas24 % 12 || 12).toString();
    const periodo = horas24 < 12 ? "A.M." : "P.M.";
    
    return { horas12, periodo };
}

function imprimirNotacao12Horas(horas12, minutos, periodo) {
    console.log(`${horas12}:${minutos.toString().padStart(2, '0')} ${periodo}`);
}

function main() {
    rl.question("Digite a hora no formato HH:MM (24 horas): ", (entrada) => {
        const [horasStr, minutosStr] = entrada.split(":");
        const horas24 = parseInt(horasStr);
        const minutos = parseInt(minutosStr);
        
        if (isNaN(horas24) || isNaN(minutos) || horas24 < 0 || horas24 > 23 || minutos < 0 || minutos > 59) {
            console.log("Entrada inválida. Certifique-se de que as horas estão entre 0 e 23, e os minutos entre 0 e 59.");
            rl.close();
            return;
        }
        
        const { horas12, periodo } = converterPara12Horas(horas24);
        imprimirNotacao12Horas(horas12, minutos, periodo);
        rl.close();
    });
}

main();