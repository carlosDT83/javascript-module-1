function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;        //% conocido como el modulo, nos da el resto de una operacion (como 7 / 2 = 3 y el resto es 1)
}

for (let number = 5; number < 20; number ++) {     //suma un numero mas num ++ = num + 1
  if (isEven(number)){
  console.log(`The exponencial of ${number} is ${exponential(number)}`);      //isEven retorna verdadero o falso
  }                                                       //si es un sola linea de codigo, no es necesario agregar las llaves, pero si hay mas de una linea, se ponen las llaves
}
