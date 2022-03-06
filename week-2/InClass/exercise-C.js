function numberChecker(num) {
  if (num > 20) {                         //Si num es mayor que 20
    return `${num} is greater than 20`;   //Devuelve num es mayor que 20
  } else if (num === 20) {                //O si num es igual a 20
    return `${num} is equal to 20`;       //Devuelve num es igual a 20
  } else if (num < 20) {                  //O si num es menor que 20
    return `${num} is less than 20`;      //Devulve num es menor que 20
  } else {                                //O si es otra cosa
    return `${num} isn't even a number :(`;   //Devuelve esto no es un numero
  }
}