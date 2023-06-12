/* En este desafío deberás crear tu propia implementación del método delete para las hashTables.

Ya pudiste observar como se hacen los métodos de get y set en anteriores clases, ahora es tu turno de desarrollar el método delete con las siguientes características:

Recibirá la key
En caso de encontrar la key, borrará todo el espacio y lo retornará
En caso de no encontrarlo, retornará undefined
Si en un mismo bucket hay dos valores, se deberá desplazar a los elementos
Ejemplo 👇


[
  ["Diego", 1990],
  ["Mariana", 1998],
]

// Después de ejecutar el método delete("Diego")

[
  ["Mariana", 1998],
]

Si quieres refrescar un poco la memoria con el código que estuvimos creando, puedes verlo dandolé click al archivo hashTable.js en el playground.

Recibirás un input y output como los siguientes

Input:

const hashTable = new Solution(50)
hashTable.set("Diego", 1990)
hashTable.set("Mariana", 1998)
hashTable.set("Adriana", 2000)

hashTable.delete("Diego")

Output:

[ "Diego", 1990 ] */

import { HashTable } from "./hashTable";

export class Solution extends HashTable {
  constructor(size) {
    super()
    this.data = new Array(size);
  }

  delete(key) {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    let deleteCurrent = undefined
    if (currentBucket.length > 0) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          deleteCurrent = [key, currentBucket[i][1]]
          this.data[address].splice(i, 1)
        }
      }
    }
    return deleteCurrent
  }
}