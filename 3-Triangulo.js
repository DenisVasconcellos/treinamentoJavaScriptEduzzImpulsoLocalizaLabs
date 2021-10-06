var prompt = require('prompt-sync')();

const a = parseInt(prompt('Digite a primeira medida do triangulo: '));
const b = parseInt(prompt('Digite a segunda medida do triangulo: '));
const c = parseInt(prompt('Digite a terceira medida do triangulo: '));

/*
| b - c | < a < b + c
| a - c | < b < a + c
| a - b | < c < a + b

a=10 b=8 c=14                                   a=3 b=6 c=7
| 14 – 8 | < 10 < 14 + 10 true                  | 6 - 7 | < 3 < 6 + 7 true
| 14 – 10| < 8 < 14 + 10 true                   | 3 - 7 | < 6 < 3 + 7 true
| 10 – 8 | < 14 < 10 + 8 true                   | 3 - 6 | < 7 < 3 + 6 true

a=3 b=4 c=8                                     a=5 b=2 c=2
| 4 - 8 | < 3 < 4 + 8 false                     | 2 - 2 | < 5 < 2 + 2 false
| 3 - 8 | < 4 < 3 + 8 false                     | 5 - 2 | < 2 < 5 + 2 false
| 3 - 4 | < 8 < 3 + 4 false                     | 5 - 2 | < 2 < 5 + 2 false

*/

var existencia1 = ((Math.abs(b-c))<a && a<(b + c));
    console.log('1-condicao sendo avaliada: ' + existencia1);
console.log(existencia1 , existencia2  , existencia3 );

var existencia2 = ((Math.abs(a-c))<b && b<(a + c));
    console.log('2-condicao sendo avaliada: ' + existencia2);
console.log(existencia1 , existencia2  , existencia3 );

var existencia3 = ((Math.abs(a-b))<c && c<(a + b));
    console.log('3-condicao sendo avaliada: ' + existencia3);
console.log(existencia1 , existencia2  , existencia3 );

if (existencia1 && existencia2 && existencia3){
    console.log('PARABENS É UM TRIANGULO');
}
else {
    console.log('NAO É TRIANGULO');
}

console.log('fim do programa');