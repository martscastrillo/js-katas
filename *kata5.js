/* En este desafío vas a recibir un número que tendrás que reducir a uno en la menor cantidad de pasos posibles aplicando las siguientes opreraciones:

Si es número par puedes dividir por 2
Si es número impar puedes sumar 1 o restar 1. (n+1) o (n-1).
Input

solution(15)

Output

5 */
let result = 0;
function solution(number) {
    
    if(number%2===0){
        result =       number/2;
       console.log(result)
    }
    else{
        result = number+1;
        console.log(result)
    }
}
console.log(solution(15));
solution(15);