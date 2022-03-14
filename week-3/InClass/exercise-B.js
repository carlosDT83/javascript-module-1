const students = ["Alejandro", "Carlos", "Ananda", "Angel", "Joao", "Diego", "Jorgelina", "Cristiane"];
const alphabeticalStudents = students.sort();

console.log(alphabeticalStudents)

const newArray = ["Ratel", "Valeria", "Vanessa", "Victor"];


const combination = /*students.concat(newArray)  <===en clase     yo===> */students + "," + newArray.sort()

console.log(combination.split())

function elementStrings(element) {
    if (combination.includes(element)){
        return `${element} is at the class with ${combination}`
    }else {
        return `${element} is not at the class with ${combination}`
    }
}

console.log(elementStrings("Carlos"))

/*Comparacion de numeros u ordenar de mayor a menor y viceversa

let numbers = [1, 10, 15, 2, 4, 5]

function compareFunction (a, b) {       //No es lo mismo compareFuncition() con compareFunction
    return a - b;                  // o return b - a
}

console.log(numbers.sort(compareFunction));

*/