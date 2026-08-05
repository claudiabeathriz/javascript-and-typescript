// the greatest

var input = require("fs").readFileSync(0, "utf8");
var values = input.trim().split(/\s+/).map(Number);
// .split(/\s+/) separa os valores por espaços, tabs ou quebras de linha
// .map(Number) converte cada valor recebido em número

var a = values[0];
var b = values[1];
var c = values[2];

var maiorAB = (a + b + Math.abs(a - b)) / 2;
var maiorGeral = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${maiorGeral} eh o maior`);
