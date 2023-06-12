/* En este desafío tendrás que crear un método especial para las hashTables que te ayude a obtener todas las keys.

Tendrás que preparar un método el cual sea capaz de identificar todas las keys de la hashTable y retornarlas en un nuevo array.

Recuerda pensar en los casos donde tengas colisiones o tengas una hashTable vacía.

Recibirás un input y output como los siguientes 👇

Input:

const hashTable = new Solution(50)
hashTable.set("Diego", 1990)
hashTable.set("Mariana", 1998)
hashTable.set("Miranda", 2000)
hashTable.set("Cat", 2010)

Output:

[ "Diego", "Mariana", "Cat", "Miranda" ] */

import { HashTable } from "./hashTable.js"

export class Solution extends HashTable {
  constructor(size){
    super()
    this.data = new Array(size)
  }

  getAllKeys() {
    const array = this.data
    let key = []

    array.forEach((e) => {
      e.forEach((k) => {
        key.push(k[0]);
      })
    });
    return key;
  }
}
