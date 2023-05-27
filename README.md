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

---

- **KATA 9:** Tienes un array de objetos que representan datos de productos con los siguientes atributos:

name
price
stock
Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124.

Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe un parámetro de entrada:

array: Un array de objetos.
Dentro del cuerpo de la función addNewAttr debes escribir tu solución.

Ejemplo:

Input:
[
{
name: "Product 1",
price: 1000,
stock: 10
},
{
name: "Product 2",
price: 2000,
stock: 20
}
]

Output:
[
{
name: "Product 1",
price: 1000,
stock: 10,
taxes: 190
},
{
name: "Product 2",
price: 2000,
stock: 20,
taxes: 380
}
]

---

- **KATA 10:** Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:

array: Un array de strigs con palabras
Dentro del cuerpo de la función filterByLength debes escribir tu solución.

Ejemplo 1:

Input: ['amor', 'sol', 'piedra', 'día']
Output: [ 'amor', 'piedra' ]

Ejemplo 2:

Input: ['rosa', 'gol', 'pez', 'día', 'gafas']
Output: [ 'rosa', 'gafas' ]

---

- **KATA 11:** Tienes un array de objetos que representan ordenes de compra con los siguientes atributos:

customerName: string
total: number
delivered: boolean
Tu reto es filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100 y además que el estado delivered sea "true".

Para solucionarlo vas a encontrar una función llamada filterOrders que recibe un parámetro de entrada:

array: Un array de objetos
Dentro del cuerpo de la función filterOrders debes escribir tu solución.

Ejemplo:

Input:
[
{
customerName: "Nicolas",
total: 100,
delivered: true,
},
{
customerName: "Zulema",
total: 120,
delivered: false,
},
{
customerName: "Santiago",
total: 300,
delivered: true,
}
]

Output:
[
{
customerName: "Nicolas",
total: 100,
delivered: true,
},
{
customerName: "Santiago",
total: 300,
delivered: true,
}
]

---

- **KATA 12:** Tu reto en este desafío es buscar si ese string tiene un término de búsqueda dado, por ejemplo verificar si dentro de la frase "Ana lava la tina" está el término "ana" y si lo tiene retornar un true de lo contrario retornar un false, debes tener en cuenta que debe encontrar coincidencias, así el término de búsqueda sea mayúscula o minúscula.

Para solucionarlo vas a encontrar una función llamada checkInString que recibe dos parámetros de entrada:

text: Un string
term: Un string con el término a buscar
Dentro del cuerpo de la función checkInString debes escribir tu solución.

Ejemplo 1:

Input: "Ana lava la tina", "ana"
Output: true

Ejemplo 2:

Input: "Santiago", "tiago"
Output: true

Ejemplo 3:

Input: "Nicolas", "ana"
Output: false

---

- **KATA 13:** Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado.

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
[]

---

- **KATA 14:** Tienes un array de números y tu reto es retornar la suma de todos los valores en él.

Para solucionarlo vas a encontrar una función llamada calcSum que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función calcSum debes escribir tu solución.

Ejemplo 1:

Input: [1, 1, 1]
Ouput: 3

Ejemplo 2:

Input: [2, 4, 8]
Output: [2, 4, 8]

Ejemplo 3:

Input: []
Output: 0

---

- **KATA 15:** Tu reto es retornar true si dentro de array de números al menos uno es un número, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:

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
Output: false

---

- **KATA 16:** Tu reto es retornar true si dentro de array de números todos son pares, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:
  numbers: Un array de números
  Dentro del cuerpo de la función checkArray debes escribir tu solución.

Ejemplo 1:
Input: [2, 4, 6, 8, 10]
Output: true

Ejemplo 2:
Input: [1, 3, 5, 7, 10, 11]
Output: false

Ejemplo 3:
Input: [1, 3, 5]
Output: false

Ejemplo 4:
Input: []
Output: false

---

- **KATA 17:** Tu reto es retornar Tienes el AS si dentro de array de strings tienes la palabra AS y si no tienes el AS entonces deberás retornar un No, tienes el AS, para solucionarlo vas a encontrar una función llamada findAs que recibe un parámetro de entrada:

numbers: Un array de strigs con nombres de cartas de Poker.
Dentro del cuerpo de la función findAs debes escribir tu solución.

Ejemplo 1:

Input: ['diamonds', 'hearts', 'spades', 'AS']
Output: 'Tienes el AS'

Ejemplo 2:

Input: ['diamonds', 'hearts', 'spades']
Output:'No tienes el AS'

---

- **KATA 18:** Dado un array de strings tu reto es retornar la posición dentro del array en donde existe la palabra clave "myKey" y si no existe deberás retornar false, para solucionarlo vas a encontrar una función llamada findMyKey que recibe un parámetro de entrada:

array: Un array de strigs.
Dentro del cuerpo de la función findMyKey debes escribir tu solución.

Ejemplo 1:

Input: ["diamonds", "myKey", "spades", "AS"]
Output: 1

Ejemplo 2:

Input: ["diamonds", "hearts", "spades"]
Output: false
solution();

Ejemplo 3:

Input: ["myKey", "hearts", "spades"]
Output: 0

---

- **KATA 19:** Dado un array de strings tu reto es retornar un string en donde cada elemento del array esté separado por comas, para solucionarlo vas a encontrar una función llamada joinString que recibe un parámetro de entrada:

words: Un array de strigs.
Dentro del cuerpo de la función joinString debes escribir tu solución.

Ejemplo 1:

Input: ["amor", "sol", "piedra", "día"]
Output: "amor,sol,piedra,día"
solution();

Ejemplo 2:

Input: ["diamonds", "hearts", "spades"]
Output: "diamonds,hearts,spades"

---

- **KATA 20:** En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-).
  Para solucionarlo vas a encontrar una función llamada parseToURL que recibe un parámetro de entrada:

title: Un String con el título.
Dentro del cuerpo de la función parseToURL debes escribir tu solución.

Ejemplo 1:
Input: "La forma de correr Python"
Output: "la-forma-de-correr-python"

Ejemplo 2:
Input: "La API para nunca parar de aprender"
Output: "la-api-para-nunca-parar-de-aprender"

Ejemplo 3:
Input: "Curso de arrays"
Output: "curso-de-arrays"

---

- **KATA 21:** En este desafío recibirás dos arrays de números como parámetros de entrada y debes retornar un array que tenga los dos arrays unidos, para solucionarlo vas a encontrar una función llamada mergeArrays que recibe dos parámetros de entrada:

arrayA: Un array
arrayB: Un array
Dentro del cuerpo de la función mergeArrays debes escribir tu solución.

Ejemplo 1:

Input: [1, 2, 3], [4, 5, 6]
Output: [1, 2, 3, 4, 5 , 6]

Ejemplo 2:

Input: ["A", "B", "C"], ["D", "E", "H"]
Output: ["A", "B", "C", "D", "E", "H"]

---

- **KATA 21:** En este desafío tienes un array que contiene otros arrays internos, tu reto es retornar un array que tenga los elementos de los otros arrays eliminando los arrays internos y dejando solo los valores, normalmente a esto le llamamos aplanar el array o "Flattening Algorithm".

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
[1, 2, 3, 4, 5, 6, 7, 8, 9]

---

- **KATA 22:** En este desafío tienes un array que contiene otros arrays internos, tu reto es retornar un array que tenga los elementos de los otros arrays eliminando los arrays internos y dejando solo los valores, normalmente a esto le llamamos aplanar el array o "Flattening Algorithm".
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
[1, 2, 3, 4, 5, 6, 7, 8, 9]

---

- **KATA 23:** En este desafío te damos como entrada un número positivo mayor a cero y debes regresar un arreglo con todos los números primos menores o iguales a ese número de entrada ordenados de menor a mayor.

Recuerda que un número es primo si es solo divisible por 1 y por si mismo.

Nota: Todos los números primos son números impares a excepción del número 2. El número 1 no es primo porque no cumple con las dos condiciones mencionadas arriba.

Input

solution(5);

Output

[2, 3, 5]

---

- **KATA 24:** DESCRIPTION:

The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples

numberToPower(3, 2) // -> 9 ( = 3 _ 3 )
numberToPower(2, 3) // -> 8 ( = 2 _ 2 \* 2 )
numberToPower(10, 6) // -> 1000000

---

- **KATA 25:** BACK TO BASICS

Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

---

- **KATA 26:** BACK TO BASICS

Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
case "Free":
console.log("Solo puedes tomar los cursos gratis");
break;
case "Basic":
console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
break;
case "Expert":
console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
break;
case "ExpertPlus":
console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
break;
}

---

- **KATA 27:** BACK TO BASICS

Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {

}

---

- **KATA 28:** Calcular medidas circulo: diametro, perimetro y área

---

- **KATA 29:** En este desafío debes calcular la altura sin decimales de un triángulo escaleno (todos sus lados son distintos) o false en caso de que los parámetros recibidos no cumplan los requisitos del triángulo escaleno.

Input

trianguloEscaleno(16,8,10)
trianguloEscaleno(6,6,6)

Output

4
false

---

- **KATA 30:** En este desafío vas a recibir un array de objetos. Cada objeto representa a un usuario. Debes encontrar al usuario con cierto ID y retornar su nombre. En caso de no existir, debes retornar false.

Input

const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

solution(users, 456);
solution(users, 999);

Output

Juanita Alcaparra
false

---

- **KATA 31:** En este desafío debes convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto dentro de un array.
  Input
  const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra',
  };
  solution(obj);
  Output

[
{
id: "123",
name: 'Juanito Alcachofa',
},
{
id: "456",
name: 'Juanita Alcaparra',
},
]

---

- **KATA 31:** Counting sheep...
  Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true, true, true, false,
true, true, true, true ,
true, false, true, false,
true, false, false, true ,
true, true, true, true ,
false, false, true, true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

---

- **KATA 32:** Counting sheep...
  Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true, true, true, false,
true, true, true, true ,
true, false, true, false,
true, false, false, true ,
true, true, true, true ,
false, false, true, true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

---

- **KATA 33:** OBJETIVO: Agregar y eliminar elementos de un array.
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

- **KATA 34:** The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples

numberToPower(3, 2) // -> 9 ( = 3 _ 3 )
numberToPower(2, 3) // -> 8 ( = 2 _ 2 \* 2 )
numberToPower(10, 6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and \*\* are disabled.

---

- **KATA 35:**
  Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado. El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien gane cada punto del juego.
- Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
- Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
  15 - Love
  30 - Love
  30 - 15
  30 - 30
  40 - 30
  Deuce
  Ventaja P1
  Ha ganado el P1
- Si quieres, puedes controlar errores en la entrada de datos.
- Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.

---

- **KATA 36:** POO

Dadas la siguientes clases:

Clase Banda con las propiedades:

nombre - string
generos - Array
integrantes - Array
Crea una clase llamada "Integrante" con las propiedades:

nombre - string
instrumento - string
Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Bateria".

La solución debería tener un input y output como los siguientes:

Input

const data = {
nombre: "Los Jacks",
generos: ["rock", "pop", "post-punk"],
integrantes: [],
}
const banda = new Banda(data)
banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))

Output

{
"nombre":"Los Jacks",
"generos":["rock","pop","post-punk"],
"integrantes":[
{"nombre":"Erik","instrumento":"Guitarra"},
{"nombre":"Paul","instrumento":"Bateria"}
]}

---

- **KATA 37:** POO

En este reto dada la siguiente clase:

export class Course {
constructor({
name,
classes = [],
}) {
this.name = name;
this.classes = classes;
}

get name() {

}

set name(nuevoNombrecito) {

}
}

Usando el set de la propiedad name valida siempre que se le quiera asignar un valor lo siguiente:

Que sea de tipo string.
Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
Si no es un string no se cambia el valor de la propiedad name.
La solución debería tener un input y output como los siguientes:

Input

const courseName = "curso de programación básica"
const nombreMaysuculas = new Course({
name: courseName,
})
nombreMayusculas.name

Output

'Curso de Programación Básica'

---

- **KATA 38:** POO

Dentro de este reto encuentras las clases Student y Comment con un código base, recuerda ir a verlas en el sistema de archivos.

Tu reto consisten en:

Hacer que la clase TeacherStudent herede de Student
Agrega un propiedad de tipo Array llamada skills a la clase TeacherStudent.
Sobrescribir el método publicarComentario dentro de TeacherStundent.
Debe agregar el array de skills en su la propiedad studentRole de la clase Comment.
El string debe verse de la siguiente manera "profesor de skill1, skill2".
Input

const skills = ["js", "python", "mongodb"]
const props = {
name: "Erik Ochoa",
username: "elyager"
}

const profesor = new TeacherStudent(props, skills)
profesor.publicarComentario('Mi primer comentario')

Output

{
"studentName":"Erik Ochoa (profesor de js,python,mongodb)",
"likes":"0 likes",
"content":"Mi primer comentario"
}

---

- **KATA 39:**
  En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.

Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.

Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.

Input:

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();

Output:

["michi", "firulais"]

---

- **KATA 40:**
Determine offspring sex based on genes XX and XY chromosomes

The male gametes or sperm cells in humans and other mammals are heterogametic and contain 
one of two types of sex chromosomes. 
They are either X or Y. The female gametes or eggs however, contain only the X 
sex chromosome and are homogametic.

The sperm cell determines the sex of an individual in this case. If a sperm cell 
containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. 
If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

Determine if the sex of the offspring will be male or female based on the X or Y 
chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a 
daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

---

- **KATA 41:**
En este desafío te damos como entrada un número positivo mayor a cero y debes regresar 
un arreglo con todos los números primos menores o iguales a ese número de entrada ordenados 
de menor a mayor.

Recuerda que un número es primo si es solo divisible por 1 y por si mismo.

Nota: Todos los números primos son números impares a excepción del número 2. 
El número 1 no es primo porque no cumple con las dos condiciones mencionadas arriba.

Input

solution(5);

Output

[2, 3, 5] 
