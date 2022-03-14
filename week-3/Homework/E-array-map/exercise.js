// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var numbersMultiplicated1 = numbers.map(number => number * 100)
console.log(numbersMultiplicated1)

var numbersMultiplicated2 = numbers.map(number => {
  return number * 100
})
console.log(numbersMultiplicated2)

var numbersMultiplicated3 = numbers.map(function (number) {
  return number * 100;
})
console.log(numbersMultiplicated3)

var numbersMultiplicated4 = numbers.map(function Multiplicated(number) {
  return number * 100;
})
console.log(numbersMultiplicated4)

function multiplicated(number) {
  return number * 100;
}
var numbersMultiplicated5 = numbers.map(multiplicated);

console.log(numbersMultiplicated5)