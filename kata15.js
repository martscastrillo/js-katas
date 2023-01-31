/* Tu reto es retornar true si dentro de array de números al menos uno es un número, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función checkArray debes escribir tu solución.

Ejemplo 1:

Input: [1, 3, 5, 7, 10, 11]
Output: true

Ejemplo 2:

Input: [1, 3, 5]
Output: false

Ejemplo 3:

Input: []
Output: false */

let sumapar = [];
let sumaimpar = [];
let result = true
function checkArray(numbers) {
  if (numbers.length !== 0) {
    const found = numbers.find(element => element%2===0);
    if(found===undefined){
      result = false
      console.log(result)
    }
    else{
      result = true
      console.log(result)
    }
  }
  else if (numbers.length === 0) {
    result = false
    console.log(result)

  }
}
/* let numbers = [1, 3, 5, 7, 10, 11] */
let numbers =   [1, 3, 5]
/* let numbers = [] */


checkArray(numbers);