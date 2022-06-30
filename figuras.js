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

function perimetroTriangulo(lado1, lado2, base){
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
/* console.log("pi es: " + pi); */

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

// AQUI INTERACTUAMOS CON EL HTML

// FUNCIONES PARA EL CUADRADO

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const select = document.getElementById("selectCuadrado");
    const medida = select.value
    if(medida == 1){
        document.getElementById("resultadoCuadrado").innerHTML=`${perimetro.toFixed(1)} cm`
    }
    if(medida == 2){
        document.getElementById("resultadoCuadrado").innerHTML=`${perimetro.toFixed(1)} m`
    }
    if(medida == 3){
        document.getElementById("resultadoCuadrado").innerHTML=`${perimetro.toFixed(1)} km`
    }
    
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    
    const select = document.getElementById("selectCuadrado");
    const medida = select.value
    if(medida == 1){
        document.getElementById("resultadoCuadrado").innerHTML=`${area.toFixed(1)} cm²`
    }
    if(medida == 2){
        document.getElementById("resultadoCuadrado").innerHTML=`${area.toFixed(1)} m²`
    }
    if(medida == 3){
        document.getElementById("resultadoCuadrado").innerHTML=`${area.toFixed(1)} km²`
    }
}

// FUNCIONES PARA EL TRIANGULO 

function calcularPerimetroTriangulo(){
    const inputA = document.getElementById("inputTriangulo-lado1");
    const valueA = parseInt(inputA.value);

    const inputB = document.getElementById("inputTriangulo-lado2");
    const valueB = parseInt(inputB.value);
    
    const inputC = document.getElementById("inputTriangulo-base");
    const valueC = parseInt(inputC.value);

    const perimetro = perimetroTriangulo(valueA, valueB, valueC);

    const select = document.getElementById("selectTriangulo");
    const medida = select.value;
    if(medida == 1){
        document.getElementById("resultadoTriangulo").innerHTML=`${perimetro.toFixed(1)} cm`
    }
    if(medida == 2){
        document.getElementById("resultadoTriangulo").innerHTML=`${perimetro.toFixed(1)} m`
    }
    if(medida == 3){
        document.getElementById("resultadoTriangulo").innerHTML=`${perimetro.toFixed(1)} km`
    }
}

function calcularAreaTriangulo() {
    const inputbase = document.getElementById("inputTriangulo-base");
    const valuebase = parseInt(inputbase.value);

    const inputaltura = document.getElementById("inputTriangulo-altura");
    const valuealtura = parseInt(inputaltura.value);

    const area = areaTriàngulo(valuebase, valuealtura);

    const select = document.getElementById("selectTriangulo");
    const medida = select.value;
    if(medida == 1){
        document.getElementById("resultadoTriangulo").innerHTML=`${area.toFixed(1)} cm²`
    }
    if(medida == 2){
        document.getElementById("resultadoTriangulo").innerHTML=`${area.toFixed(1)} m²`
    }
    if(medida == 3){
        document.getElementById("resultadoTriangulo").innerHTML=`${area.toFixed(1)} km²`
    }
}

// CIRCULOS

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    const select = document.getElementById("selectCirculo");
    const media = select.value;
    if(media == 1){
        document.getElementById("resultadoCirculo").innerHTML=`${perimetro.toFixed(1)} cm`
    }
    if(media == 2){
        document.getElementById("resultadoCirculo").innerHTML=`${perimetro.toFixed(1)} m`
    }
    if(media == 3){
        document.getElementById("resultadoCirculo").innerHTML=`${perimetro.toFixed(1)} km`
    }
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    const select = document.getElementById("selectCirculo");
    const media = select.value;
    if(media == 1){
        document.getElementById("resultadoCirculo").innerHTML=`${area.toFixed(1)} cm²`
    }
    if(media == 2){
        document.getElementById("resultadoCirculo").innerHTML=`${area.toFixed(1)} m²`
    }
    if(media == 3){
        document.getElementById("resultadoCirculo").innerHTML=`${area.toFixed(1)} km²`
    }
}