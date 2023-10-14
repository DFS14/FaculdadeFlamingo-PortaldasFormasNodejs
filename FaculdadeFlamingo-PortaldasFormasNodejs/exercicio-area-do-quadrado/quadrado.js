//Importe o módulo 'readline' para lidar com entrada do usuário
const readline = require('readline');

//Crie uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Função para calcular a área do quadrado
function calcularAreaQuadrado(raio) {
    const areaQuadrado = ladoNumero * ladoNumero;
    return areaQuadrado;
}

rl.question('Digite o comprimento de um lado do quadrado: ', (lado) => {
    
  // Converter o lado para um número
  const ladoNumero = parseFloat(lado);

  if (!isNaN(ladoNumero) && ladoNumero > 0) {

    // Calcular a área do quadrado (lado * lado)
    const areaQuadrado = ladoNumero * ladoNumero;
    console.log(`A área do quadrado é: ${areaQuadrado}`);
  } else {
    console.log('Por favor, insira um valor válido para o lado do quadrado.');
  }

  rl.close();
});