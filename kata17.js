/* Tu reto es retornar Tienes el AS si dentro de array de strings tienes la palabra AS y si no tienes el AS entonces deberás retornar un No, tienes el AS, para solucionarlo vas a encontrar una función llamada findAs que recibe un parámetro de entrada:

numbers: Un array de strigs con nombres de cartas de Poker.
Dentro del cuerpo de la función findAs debes escribir tu solución.

Ejemplo 1:

Input: ['diamonds', 'hearts', 'spades', 'AS']
Output: 'Tienes el AS'

Ejemplo 2:

Input: ['diamonds', 'hearts', 'spades']
Output:'No tienes el AS'*/

const data =  ['diamonds', 'hearts', 'spades', 'AS']
/* const data = ['diamonds', 'hearts', 'spades'] */
let result = 0
function findAs(numbers) {
for (const iterator of numbers) {
  const found = numbers.find(element => element === 'AS');
  if(found===undefined){
    result = 'No tienes el AS'
  }
  else{
    result = 'Tienes el AS'
  }
 
}
console.log(result)
}

findAs(data) 