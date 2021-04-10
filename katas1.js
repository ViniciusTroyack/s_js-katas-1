//Kata 1.
//Usando os dois loops para treinar suas implementações.

//Retornar os números de 1 a 20.
//Usando For
function oneThroughTwentyFor(){
    
  let numeros = [];
  
  for(let i = 1; i <= 20; i++ ){
    numeros.push(i);
  }
  return numeros;
}
console.log("1 ao 20 usando For:");
console.log(oneThroughTwentyFor());

//Usando While
function oneThroughTwentyWhile() {
    
  let numeros = [];
  let i = 1;
  while(i <= 20){
    numeros.push(i);
    i ++;
  }
  return numeros; 
} 
console.log("1 ao 20 usando While:");
console.log(oneThroughTwentyWhile());

//Retornar os números pares de 1 a 20
//Usando for
function evensToTwentyFor() {
  
  let numeros = [];
  
  for(let i = 2; i <= 20; i += 2){
    numeros.push(i);
  }
  return numeros;
}
console.log("Pares de 1 a 20 usando For:");
console.log(evensToTwentyFor());

//Usando While
function evensToTwentyWhile(){

  let numeros = [];
  let i = 2

  while(i <= 20){
  numeros.push(i);
  i += 2;
  }
  return numeros;
}
console.log("Pares de 1 a 20 usando While:");
console.log(evensToTwentyWhile());

//Retornar os números ímpares de 1 a 20
//Usando For
function oddsToTwentyFor() {
  
  let numeros = [];

  for(let i = 1; i <= 20; i += 2){
    numeros.push(i);
  }
  return numeros; 
}
console.log("Impares de 1 ao 20 com For:");
console.log(oddsToTwentyFor());

//Usando While
function oddsToTwentyWhile() {

  let numero = [];
  let i = 1;

  while(i <= 20){
  numero.push(i);
  i += 2;
  }
  return numero;
}
console.log("Impares de 1 ao 20 com While:");
console.log(oddsToTwentyWhile());

//Retornar os múltiplos de 5 até 100
//Usando For
function multiplesOfFiveFor() {
    
  let numeros = [];

  for(let i = 5; i <= 100; i += 5){
    numeros.push(i);
  }
  return numeros;
}
console.log("Multiplos de 5 ate 100 com For:");
console.log(multiplesOfFiveFor());

//Usando While
function multiplesOfFiveWhile(){

  let numeros = [];
  let i = 5;

  while(i <= 100){
    numeros.push(i);
    i += 5;
  }
  return numeros
}
console.log("Multiplos de 5 ate 100 com While:");
console.log(multiplesOfFiveWhile());

//Números até 100 que forem quadrados perfeitos.
//Usando For
function squareNumbersFor() {
 
 let numeros = [];
 let j = 0

 for(let i = 1; i <= 10; i++){
   j = i * i;
   numeros.push(j);
 }
    return numeros
}
console.log("Quadrados perfeitos até 100 com For:");
console.log(squareNumbersFor());

//Usando While
function squareNumbersWhile(){
  
  let numeros = []
  let i = 1
  let j = 0

  while(i <= 10){
    j = i*i;
    numeros.push(j)
    i++
  }
  return numeros;
}
console.log("Quadrados perfeitos até 100 com While:");
console.log(squareNumbersWhile());

//Números contando de trás para frente de 20 até 1.
//Usando For
function countingBackwardsFor() {
  
  let numeros = [];

  for(let i = 20; i >= 1; i --){
    numeros.push(i);
  }
  return numeros;
}
console.log("Contagem regressiva de 20 a 1 usando For:");
console.log(countingBackwardsFor());

//Usando While
function countingBackwardsWhile(){

  let numeros = [];
  let i = 20

  while(i >= 1){
    numeros.push(i);
    i--;
  }
  return numeros;
}
console.log("Contagem regressiva de 20 a 1 usando While:");
console.log(countingBackwardsWhile());

//Números pares de 20 até 1
//Usando For
function evenNumbersBackwardsFor() {
 
  let numeros = []

  for(let i = 20; i >= 1; i -= 2){
    numeros.push(i);
  }
  return numeros;
}
console.log("Contagem regressiva dos nº pares de 20 a 1 usando For:");
console.log(evenNumbersBackwardsFor());

//Usando While
function evenNumbersBackwardsWhile(){
    
  let numeros = [];
  let i = 20

  while(i >= 1){
  numeros.push(i);
  i -= 2;
  }
  return numeros;
}
console.log("Contagem regressiva dos nº pares de 20 a 1 usando While:");
console.log(evenNumbersBackwardsWhile());

//Números ímpares de 20 até 1
//Usando for
function oddNumbersBackwardsFor() {

  let numeros = [];

  for(let i = 19; i >= 1; i -= 2){
    numeros.push(i);
  }
  return numeros;
}
console.log("Contagem regressiva dos nº impares de 20 a 1 usando For:");
console.log(oddNumbersBackwardsFor());

//Usando While
function oddNumbersBackwardsWhile(){

  let numeros = [];
  let i = 19;
  
  while(i >= 1){
    numeros.push(i);
    i -= 2;
  }
  return numeros;
}
console.log("Contagem regressiva dos nº impares de 20 a 1 usando While:");
console.log(oddNumbersBackwardsWhile());

//Múltiplos de 5 contando de trás para frente a partir de 100
//Usando For
function multiplesOfFiveBackwardFor() {

  let numeros = [];

  for (let i = 100; i >= 5; i -= 5){
    numeros.push(i);
  }
  return numeros;
}
console.log("Contagem regressiva dos múltiplos de 5 do 100 ao 5 usando For:");
console.log(multiplesOfFiveBackwardFor());

//Usando While
function multiplesOfFiveBackwardWhile() {
  
  let numeros = [];
  let i = 100;

  while(i >= 5){
    numeros.push(i);
    i -= 5;
  }
  return numeros;
}
console.log("Contagem regressiva dos múltiplos de 5 do 100 ao 5 usando While:");
console.log(multiplesOfFiveBackwardWhile());

//Quadrados perfeitos contando de trás para frente a partir de 100.
//Usando For
function squareNumbersBackwardsFor() {
    
  let numeros = [];
  let j = 0

  for(let i = 10; i >= 1; i--){
    j = i * i;
    numeros.push(j);
  }
  return numeros;
}
console.log("Contagem regressiva dos quadrados perfeitos de 100 a 1 com For:")
console.log(squareNumbersBackwardsFor());

//Usando While
function squareNumbersBackwardsWhile(){

  let numeros = [];
  let i = 10;
  let j = 0;

  while(i >= 1){
  j = i * i;
  numeros.push(j);
  i--;
  }
  return numeros;
}
console.log("Contagem regressiva dos quadrados perfeitos de 100 a 1 com While:")
console.log(squareNumbersBackwardsWhile());

