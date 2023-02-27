/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

function humanToLeet(text) {
    let textPlaceholder = text;


let arr = text.split('');
let answerArray = [];
for (const iterator of arr) {
    if(iterator==='a'){
        answerArray.push(4)
    }
    if(iterator==='b'){
        answerArray.push(8)
    }
    if(iterator==='c'){
        answerArray.push('¢')
    }
    if(iterator==='d'){
        answerArray.push(')')
    }
    if(iterator==='e'){
        answerArray.push(3)
    }
    if(iterator==='f'){
        answerArray.push('ƒ')
    }
    if(iterator==='g'){
        answerArray.push(6)
    }
    if(iterator==='h'){
        answerArray.push('#')
    }
   
    if(iterator==='i'){
        answerArray.push(1)
    }
    if(iterator==='j'){
        answerArray.push(',_|')
    }
    if(iterator==='k'){
        answerArray.push('>|')
    }
    if(iterator==='l'){
        answerArray.push('£')
    }
    if(iterator==='m'){
        answerArray.push('^^')
    }
    if(iterator==='n'){
        answerArray.push('И')
    }
    if(iterator==='o'){
        answerArray.push('0')
    }
    if(iterator==='p'){
        answerArray.push('|*')
    }
    if(iterator==='q'){
        answerArray.push(9)
    }
    if(iterator==='r'){
        answerArray.push('I2')
    }
    if(iterator==='s'){
        answerArray.push(5)
    }
    if(iterator==='t'){
        answerArray.push(7)
    }
    if(iterator==='u'){
        answerArray.push('(_)')
    }
  
    if(iterator==='v'){
        answerArray.push('\/')
    }
    if(iterator==='w'){
        answerArray.push('\/\/')
    }
    if(iterator==='x'){
        answerArray.push('><')
    }
    if(iterator==='y'){
        answerArray.push('j')
    }
    if(iterator==='z'){
        answerArray.push(2)
    }

}

console.log(answerArray.join(''))
}

humanToLeet('brandelicious')