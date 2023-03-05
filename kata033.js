/* OBJETIVO: Agregar y eliminar elementos de un array.
Escriba una función que agregue o elimine un elemento en la primera o última posición de un array.
Ejemplo 1 añadir al principio:
Input: [1, 6, 9]
Output: [5, 1, 6, 9]
Ejemplo 2 añadir al final:
Input: [1, 6, 9]
Output: [1, 6, 9, 12]
Ejemplo 3 eliminar al principio:
Input: [1, 6, 9]
Output: [6, 9]
Ejemplo 4 eliminar al final:
Input: [1, 6, 9]
Output: [1, 6]
CONSIDERACIONES: presentar varias alternativas, una con mutación del array y otra sin mutación (editado)  */


function addFirstElement(array) {
    array.splice(0, 0, 5);
    console.log(array);

}
function addLastElement(array) {
    array.push(12);
    console.log(array);
}
function deleteFirstElement(array) {
    array.shift();
    console.log(array)
}
function deleteLastElement(array) {
    array.pop();
    console.log(array);
}
const array1 = [1, 6, 9];
addFirstElement(array1);
const array2 = [1, 6, 9];
addLastElement(array2);
const array3 = [1, 6, 9];
deleteFirstElement(array3);
const array4 = [1, 6, 9];
deleteLastElement(array4);