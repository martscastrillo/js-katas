/* The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples

numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.
 */

function numberToPower(num1, num2) {
    let list = [];
    let result = 1;
    for (let index = 0; index < num2; index++) {
        list.push(num1);
       
    }

    for (let i = 0; i < num2; i++) {
        result = list[i] * result;
   
   }

    console.log(result);
}

numberToPower(3, 2);
numberToPower(2, 3);
numberToPower(10, 6);