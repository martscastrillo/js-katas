/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function printFizzBuzz() {
    for (let index = 1; index < 101; index++) {
        if(index%3===0){
            console.log( index+'fizz');
        }
       else if(index%5===0){
            console.log(index+'buzz');
        }
        else if(index%5===0 && index%3===0){
            console.log(index+'fizzbuzz');
        }
       /*  else{
            ///he añadido esta condicion para verificar que efectivamente está haciendo el bucle y las condiciones de manera correcta
            console.log(index+'whaaaaaat');
        } */
    }
  
}

printFizzBuzz() ;