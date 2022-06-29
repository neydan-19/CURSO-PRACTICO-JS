// Codigo del Cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado){
    return lado * 4;
} 
/* console.log("El perìmetro del cuadrado es " + perimetroCuadrado + "cm"); */

function areaCuadrado(lado){
    return lado * lado;
} 
/* console.log("El àrea del cuadrado es " + areaCuadrado + "cm²"); */
console.groupEnd();

// Codigo del Triàngulo
console.group("Triangulos");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triàngulo miden: " 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
); */

/* const alturaTriangulo = 5.5;
console.log("La altura del triàngulo es " + alturaTriangulo + "cm"); */

function perimetroTriàngulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
/* console.log("El perìmetro del triàngulo es " + perimetroTriàngulo + "cm"); */

/* const areaTriàngulo = (baseTriangulo * alturaTriangulo) / 2 ; */
function areaTriàngulo(base, altura){
    return (base * altura) / 2;
} 
/* console.log("El àrea del triàngulo es " + areaTriàngulo + "cm²"); */

console.groupEnd();

// Codigo del Circulo
console.group("Circulos");

// Radio
/* const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm"); */

// Diametro
function diametroCirculo(radio){
 return radio * 2;
}

// Pi
const pi = Math.PI;
console.log("pi es: " + pi);

// Circunferencia
function perimetroCirculo(radio){
    const Diametro = diametroCirculo(radio);
    return Diametro * pi;
}

// Àrea
function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd();