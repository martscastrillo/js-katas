/* En este desafío te damos como entrada un número positivo mayor a cero y debes regresar 
un arreglo con todos los números primos menores o iguales a ese número de entrada ordenados 
de menor a mayor.

Recuerda que un número es primo si es solo divisible por 1 y por si mismo.

Nota: Todos los números primos son números impares a excepción del número 2. 
El número 1 no es primo porque no cumple con las dos condiciones mencionadas arriba.

Input

solution(5);

Output

[2, 3, 5] */
function obtenerPrimosMenores(numero) {
	function esPrimo(num) {
	  if (num <= 1) {
		return false;
	  }
	  
	  for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
		  return false;
		}
	  }
	  
	  return true;
	}
	
	return Array.from({ length: numero }, (_, i) => i).filter(esPrimo);
  }
  
  // Ejemplo de uso
  let numeroLimite = 50;
  let primosMenores = obtenerPrimosMenores(numeroLimite);
  console.log(primosMenores);
  