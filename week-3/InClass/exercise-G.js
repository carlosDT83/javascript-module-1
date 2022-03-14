//.filter() devuelve valor booleano

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
const adults = birthYears.filter(year => getAge(year) > 17)
const adults2 = birthYears.map(getAge).filter(year => year < 2005).map(getAge)
console.log(adults);
console.log(birthYears);
console.log(adults2);