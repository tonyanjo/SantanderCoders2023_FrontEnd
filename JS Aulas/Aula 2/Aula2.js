function reajusteDeSalario(salario) {
    if (isNaN(salario) || salario <= 0) {
      console.log("Por favor, insira um valor de salário válido.");
      return;
    }
  
    let percentual;
  
    if (salario <= 1500) {
      percentual = 20;
    } else if (salario <= 1700) {
      percentual = 15;
    } else if (salario <= 2000) {
      percentual = 10;
    } else {
      percentual = 5;
    }
  
    const aumento = (salario * percentual) / 100;
    const novoSalario = salario + aumento;
  
    console.log(`Salário antes do reajuste: R$ ${salario.toFixed(2)}`);
    console.log(`Percentual de aumento aplicado: ${percentual}%`);
    console.log(`Valor do aumento: R$ ${aumento.toFixed(2)}`);
    console.log(`Novo salário após o aumento: R$ ${novoSalario.toFixed(2)}`);
  }
  
  reajusteDeSalario(1600);