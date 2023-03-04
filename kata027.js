/*  BACK TO BASICS

Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {

}
 */

function loop1() {
    let i = 0;
    while (i < 5) {
        console.log("El valor de i es: " + i);
        i++;
    }
}
function loop2() {
    let i = 10;
    while (i >= 2) {
        console.log("El valor de i es: " + i);
        i--;
    }
}
loop1();
loop2();