/*const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

const ages = years.forEach(function age(year) {
    if ((2022 - year) < 17) {
        return `Born in ${years}, can drive in ${x} years.`
    } else ((2022 - year) >= 17) {
      return `Born in ${years}, can drive`}
})

console.log(ages)*/

/*las funciones sean verbos y las otras sustantivos*/

function getAge(birthYear) {
    return 2022 - birthYear
}

function getDriveStatus(birthYear) {
    const age = getAge(birthYear)
    if (age >= 17) {
        return `Born in ${birthYear} can drive`
    } else {
        const yearsToDrive = 17 - age
        return `Born in ${birthYear} can drive in ${yearsToDrive} years`
    }
}

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
birthYears.map(getDriveStatus).forEach(console.log)