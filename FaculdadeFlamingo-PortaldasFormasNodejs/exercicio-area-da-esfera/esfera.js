//Importe o módulo 'readline' para lidar com entrada do usuário
const readline = require('readline');

//Crie uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//Função para calcular a área da esfera
function calcularAreaEsfera(raio) {
    const area = 4 * Math.PI * Math.pow(raio, 2);
    return areaSuperficie;
}


//Pergunte ao usuário pelo raio da esfera
rl.question('Informe o raio da esfera: ', (input) => {
  const raio = parseFloat(input);

  
  //Verificar se a entrada é válida
  if (isNaN(raio) || raio <= 0) {
    console.log('Por favor, insira um valor de raio válido.');
    rl.close();
    return;
  }
 const areaSuperficie = 4 * Math.PI * Math.pow(raio, 2);
  console.log(`A área da superfície da esfera com raio ${raio} é aproximadamente ${areaSuperficie.toFixed(2)}`);

  rl.close();
});
