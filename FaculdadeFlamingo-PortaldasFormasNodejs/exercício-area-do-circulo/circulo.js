//Importe o módulo 'readline' para lidar com entrada do usuário

const readline = require('readline');

//Crie uma interface de leitura e escrita
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

//Função para calcular a área do círculo
function calcularAreaCirculo(raio) {
    const area = Math.PI * Math.pow(raio, 2);
    return area;
}

//Pergunte ao usuário pelo raio do círculo
rl.question('Informe o raio do Circulo: ', (raio) => {
   raio = parseFloat(raio);


   //Verificar se a entrada é válida
   if (!isNaN(raio) && raio > 0) {
   const area = calcularAreaCirculo(raio);
console.log (`A area do circulo com raio ${raio} é: ${area.toFixed(2)}`);
   } else {
   console.log ('Por favor, insira um raio válido maior que zero.');
}
rl.close();
});