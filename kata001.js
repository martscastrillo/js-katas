/* OBJETIVO: Dado un array, devuelve el array invertido,
Input: [1, 2, 3]
Output:  [3, 2, 1]
CONSIDERACIONES: Entregar 2 soluciones posibLes, una usando Array.prototype.reverse y otra sin usarlo */

let array1  = [1, 2, 3];
let array2 =[];
for (const element of array1) {
    array2.unshift(element);
}
console.log(array1);
console.log(array2);

///////////////////

const arr1  = [1, 2, 3];
console.log(arr1);
const arr2 = arr1.reverse();
console.log(arr2);

