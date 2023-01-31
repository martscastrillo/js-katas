/* Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado.

Para solucionarlo vas a encontrar una función llamada filterByTerm que recibe los siguientes parámetros de entrada:

array: Un array de strigs con palabras
term: Un string con el término a buscar
Dentro del cuerpo de la función filterByTerm debes escribir tu solución.

Ejemplo 1:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"

Ouput:
["ana", "anastasia"]

Ejemplo 2:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "xyz"

Output:
[] */

let newData = []
function filterByTerm(text, term) {

  for (const iterator of text) {
    let stringLoweCase = iterator.toLowerCase()
    if (stringLoweCase.includes(term)) {
      newData.push(iterator)
    }
  }
  console.log(newData)
}


let text =  ["ana", "santi", "nico", "anastasia"];
  let term = "ana"

/* let text = ["ana", "santi", "nico", "anastasia"]
let term = "xyz"
 */


filterByTerm(text, term);