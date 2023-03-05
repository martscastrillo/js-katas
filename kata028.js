/* Calcular medidas circulo: diametro, perimetro y área */

const circleRadio = 5;
const circleDiameter = circleRadio * 2;

/* Calcular medidas circulo: diametro, perimetro y área */


const circlePerimeter = circleDiameter * Math.PI;
const circleArea = (circleRadio * circleRadio) * Math.PI;
// const circleArea2 = (circleRadio ** 2) * Math.PI;
// const circleArea3 = Math.pow(radio,2) * Math.PI;

console.log({circleRadio, circleDiameter, circlePerimeter, circleArea});

function circleCalcs(radio){
    return{
        diameter: radio * 2,
        perimeter: ((radio * 2) * Math.PI).toFixed(3),
        area: (Math.pow(radio,2) * Math.PI).toFixed(3)
    }
}