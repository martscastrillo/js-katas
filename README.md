## js-katas

Enunciados:

- **KATA 1:** OBJETIVO: Dado un array, devuelve el array invertido,
  Input: [1, 2, 3]
  Output: [3, 2, 1]
  CONSIDERACIONES: Entregar 2 soluciones posibLes, una usando Array.prototype.reverse y otra sin usarlo

---

- **KATA 2:** OBJETIVO: Dado un array de números enteros, escriba una función que devuelva true cuando el array tenga valores duplicados.
  Input: [1, 1, 2, 2, 3, 5, 9, 9]
  Output: true
  CONSIDERACIONES: Entregar 2 soluciones posibes, una usando new Set() y otra sin usarlo

- **KATA 3:**:Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers

---

- **KATA 4:**: OBJETIVO: Agregar y eliminar elementos de un array.
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
  CONSIDERACIONES: presentar varias alternativas, una con mutación del array y otra sin mutación (editado)

---

- **KATA 5:** Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
- Múltiplos de 3 por la palabra "fizz".
- Múltiplos de 5 por la palabra "buzz".
- Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".

---

- **KATA 6:** Escribe un programa que reciba un texto y transforme lenguaje natural a "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje se caracteriza por sustituir caracteres alfanuméricos.
- Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) con el alfabeto y los números en "leet".
  (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")

---

- **KATA 7:** Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.

Para solucionarlo vas a encontrar una función llamada multiplyElements que recibe un parámetro de entrada:

array: Un array de números
Dentro del cuerpo de la función multiplyElements debes escribir tu solución.

Ejemplo 1:

Input: [2, 4, 5, 6, 8]
Output: [4, 8, 10, 12, 16]

Ejemplo 2:

Input: [1, 1, -2, -3]
Output: [1, 1, -4, -6]

---

- **KATA 8:** Tienes un array de objetos que representan datos de personas con los siguientes atributos:

name: string
lastName: string
age: number
Tu reto es retornar un array de strings con solo los nombres, para solucionarlo vas a encontrar una función llamada llamada getNames que recibe un parámetro de entrada:

array: Un array de objetos.
Dentro del cuerpo de la función getNames debes escribir tu solución.

Ejemplo:

Input:
[
{
name: 'Nicolas',
lastName: 'Molina',
age: 28
},
{
name: 'Valentina',
lastName: 'Molina',
age: 19
},
{
name: 'Zulema',
lastName: 'Vicente',
age: 21
},
]

Output:
['Nicolas', 'Valentina', 'Zulema']
