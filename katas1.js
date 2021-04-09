// function oneThroughTwenty() {

//   /* Your code goes below
//   Write a for or a while loop
//   return the result*/
//   let numbers = []
//   let n = 1
//   while (numbers.length < 20) {
//     numbers.push(n)
//     n++
//   }
//   return numbers
// }

// oneThroughTwenty();

// function evensToTwenty() {

//   /* Your code goes below
//   Write a for or a while loop
//   return the result */
//   let evenNumbers = []
//   let n = 0
//   while (n <= 20) {
//     if (n % 2 == 0) {
//       evenNumbers.push(n)
//     }
//     n++
//   }
//   return evenNumbers
// }

// evensToTwenty();

// function oddsToTwenty() {

//   /* Your code goes below
//   Write a for or a while loop
//   return the result */
//   let oddNumbers = []
//   let n = 0
//   while (n <= 20) {
//     if (n % 2) {
//       oddNumbers.push(n)
//     }
//     n++
//   }
//   return oddNumbers

// }

// oddsToTwenty();

// function multiplesOfFive() {

//   /* Your code goes below
//   Write a for or a while loop
//   return the result */
//   let mulFive = []
//   let n = 0

//   while (n <= 100) {
//     if (n % 5 == 0) {
//       mulFive.push(n)
//     }
//     n++
//   }
//   return mulFive

// }

// multiplesOfFive();

// function squareNumbers() {

//   /* Your code goes below
//    Write a for or a while loop
//    return the result */

//   let perfSquares = []
//   let a = 1
//   let b = 100

//   for (prftSquare = a; prftSquare <= b; prftSquare++) {

//     for (number = 1; number * number <= prftSquare; number++) {

//       if (number * number === prftSquare) {
//         perfSquares.push(prftSquare)
//         // console.log("Esse é um quadrado perfeito: " + prftSquare)
//       }
//     }
//   }
//   return perfSquares
// }

// squareNumbers();

// function countingBackwards() {

// //   /* Your code goes below
// //   Write a for or a while loop
// //   return the result */

// let numbers = []
//   let n = 20
//   while (numbers.length < 20) {
//     numbers.push(n)
//     n--
//   }
//   return numbers
// }


// countingBackwards();

// function evenNumbersBackwards() {

// //  /* Your code goes below
// //   Write a for or a while loop
// //   return the result */

// let evenBackwards = []
//   let n = 20
//   while (n <= 20 && n >=1) {
//     if (n % 2 == 0) {
//       evenBackwards.push(n)
//     }
//     n--
//   }
//   return evenBackwards
// }

// evenNumbersBackwards();

// function oddNumbersBackwards() {

//   /* Your code goes below
//    Write a for or a while loop
//    return the result */

//   let oddBackwards = []
//   let n = 20
//   while (n <= 20 && n >= 1) {
//     if (n % 2) {
//       oddBackwards.push(n)
//     }
//     n--
//   }
//   return oddBackwards

// }

// oddNumbersBackwards();

// function multiplesOfFiveBackwards() {

//   /* Your code goes below
//    Write a for or a while loop
//    return the result */

//   let mulFiveBackwards = []
//   let n = 100

//   while (n <= 100 && n >= 1) {
//     if (n % 5 == 0) {
//       mulFiveBackwards.push(n)
//     }
//     n--
//   }
//   return mulFiveBackwards
// }

// multiplesOfFiveBackwards();

function squareNumbersBackwards() {

  //    /* Your code goes below
  //   Write a for or a while loop
  //   return the result */

  let perfSquaresBackwards = []
  let a = 100
  let b = 01

  for (prftSquareBackward = a; prftSquareBackward >= b; prftSquareBackward--) {

    for (number = 1; number * number <= prftSquareBackward; number++) {

      if (number * number === prftSquareBackward) {
        perfSquaresBackwards.push(prftSquareBackward)
      }
    }
  }
  return perfSquaresBackwards
}

squareNumbersBackwards();