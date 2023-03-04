/* DESCRIPTION:

The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples

numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000 */

function numberToPower(num1, num2) {
  const result = Math.pow(num1,num2);
  console.log(result);
}

numberToPower(3, 2);
numberToPower(2, 3);
numberToPower(10, 6);