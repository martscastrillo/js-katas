/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 *
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.
 */

function game(array) {
	let markerP1;
	let markerP2;
	markerP1 = 0;
	markerP2 = 0;
	for (const points of array) {
      
		if (points == "P1"&& markerP1 == 0 ){
			markerP1 = 15;
		}
		if (points == "P2" && markerP2 == 0) {
			markerP2 = 15;
		}
		if (points == "P2" && markerP2 == 15) {
			markerP2 = 30;
		}
		if (points == "P1" && markerP1 == 15) {
			markerP1 = 30;
		}
		if (points == "P2" && markerP2 == 30) {
			markerP2 = 40;
		}
		if (points == "P1" && markerP1 == 30) {
			markerP1 = 40;
		}
        if (points == "P1" && markerP1 == 40) {
			markerP1 = "deuce";
		}
        if (points == "P2" && markerP2 == 40) {
			markerP2 = "deuce";
            markerP1 = 40;
		}
        if (points == "P1" && markerP1 == "deuce") {
			markerP1 = "ventaja p1";
            markerP2 = 40;
		}
        if (points == "P2" && markerP2 == 40 && markerP1 == "ventaja p1") {
			markerP2 = "deuce";
            markerP1 = 40;
		}
        if (points == "P1" && markerP1 == 40 && markerP2 == "ventaja p2") {
			markerP2 = 40;
            markerP1 = 40;
		}
      if (points == "P2" && markerP2 ==  "ventaja p2") {
			markerP2 = "ventaja p2";
		}
        if (points == "P1" && markerP1 == "ventaja p1") {
			markerP1 = "ventaja p1";
		}
	}
	console.log(markerP1);
	console.log(markerP2);
	if (   markerP2 ==  "ventaja p2") {
		console.log("ha ganado el P2");
	}
	else if ( markerP1 ==  "ventaja p1") {
		console.log("ha ganado el P1");
	}
	else if ((markerP1 = markerP2)) {
		console.log("empate");
	}
}
function points(params) {}

let arrayPoints = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];
game(arrayPoints);
