/* En este desafío tienes un array que contiene otros arrays internos, tu reto es retornar un array que tenga los elementos de los otros arrays eliminando los arrays internos y dejando solo los valores, normalmente a esto le llamamos aplanar el array o "Flattening Algorithm".
Para solucionarlo vas a encontrar una función llamada flatArray que recibe un parámetro de entrada:
array: Un array que tiene otros arrays dentro
Dentro del cuerpo de la función flatArray debes escribir tu solución.

Ejemplo:

Input:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

Output:
[1, 2, 3, 4, 5, 6, 7, 8, 9] */

const arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr1);
function flatArray(array) {
  let string = array.toString();
  const newArray = string.split(",");


   console.log(newArray);

}
flatArray(arr1);