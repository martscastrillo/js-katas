/* En este desafío tendrás que crear tu propia implementación del método shift.

Tendrás que hacer tu propio método shift para borrar el primer elemento que exista en tu array y retornar el elemento eliminado (no olvides modificar la longitud).

En caso de ser un array vacío, este método deberá devolver undefined.

Tu implementación debería tener un input y output como los siguientes:

Input

const myArray = new BetterArray()
myArray.unshift("Suerte")
myArray.unshift("Con el")
myArray.unshift("desafio")
myArray.unshift("platzinauta")
myArray.unshift("Un 🐱 random en el desafío")

myArray.shift()

Output

"Un 🐱 random en el desafío" */

const myArray = new BetterArray()
myArray.unshift("Suerte")
myArray.unshift("Con el")
myArray.unshift("desafio")
myArray.unshift("platzinauta")
myArray.unshift("Un 🐱 random en el desafío")

myArray.shift();

 class BetterArray extends MyArray {
  constructor(){
    super()
    this.length = 0
    this.data = {}
  }

  shift(){
    // Tu código aquí 👈
    
  }
}
