/* Operación Matemática Oculta

Descripción del reto
Encuentra la lógica de las siguientes operaciones y números:

5 + 4 = 19
8 + 2 = 610
10 + 8 = 218
12 + 9 = 321
18 + 2 = 1620
21 + 5 = 1626
Basado en la solución del desafio anterios para llegar a la solución crea una función que reciba dos números y llegue al resultado esperado.

Solución del desafio anterior

(5-4)  = 1   :   (5+4)  = 9  →  19
(8-2)  = 6   :   (8+2)  = 10 →  610
(10-8) = 2   :   (10+8) = 18 →  218
(12-9) = 3   :   (12+9) = 21 →  321
(18-2) = 16  :   (18+2) = 20 →  1620
(21-5) = 16  :   (21+5) = 26 →  1626

Input:

solution(5, 4)
solution(21, 5)

Output:

19
1626
*/

function solution(num1, num2) {
  const firstPart = num1-num2;
  const secondPart = num1+num2; 

 return(parseInt(`${firstPart}${secondPart}`))
}


console.log(solution(5, 4))
console.log(solution(21, 5))