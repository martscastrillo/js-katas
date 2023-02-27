/* Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:

array: Un array de strigs con palabras
Dentro del cuerpo de la función filterByLength debes escribir tu solución.

Ejemplo 1:

Input: ['amor', 'sol', 'piedra', 'día']
Output: [ 'amor', 'piedra' ]

Ejemplo 2:

Input: ['rosa', 'gol', 'pez', 'día', 'gafas']
Output: [ 'rosa', 'gafas' ] */

/* data =  ['amor', 'sol', 'piedra', 'día'] */
data = ['rosa', 'gol', 'pez', 'día', 'gafas']
newData =[];
function filterByLength(array) {
 for (const iterator of array) {
   if(iterator.length>=4){
    newData.push(iterator)
   }

   }
   console.log(newData)
 }
  
  

  
  
  
  
  filterByLength(data);