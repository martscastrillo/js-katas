/* En este desafío debes calcular la altura sin decimales de un triángulo escaleno (todos sus lados son distintos) o false en caso de que los parámetros recibidos no cumplan los requisitos del triángulo escaleno.

Input

trianguloEscaleno(16,8,10)
trianguloEscaleno(6,6,6)

Output

4
false*/
function trianguloEscaleno(lado1, lado2, lado3) {
    if(lado1 == lado2 || lado2 == lado3)
    {
        console.log(false);
    }
    else
    {
        let altura;
        let s = (lado1 + lado2 + lado3) / 2;
        let area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
        altura = Math.floor(2 * area / lado1);
        console.log(altura);
    }
   
}

trianguloEscaleno(16,8,10);
trianguloEscaleno(6,6,6);
