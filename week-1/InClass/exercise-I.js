function returnBornDate(age) {
  const year = 2022
  return year - age
}

console.log(returnBornDate(38));


function introduceYourself(persoName, age){
  return "Hola me llamo" + " " + persoName + "y naci en" + " " +returnBornDate(age)
}

console.log(introduceYourself("Carlos",38));