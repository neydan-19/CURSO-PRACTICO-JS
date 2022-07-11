// HELPERS

function esPar(numero){
    /* if(numero % 2 === 0){
        return true;
    } else {
        return false;
    } 
    ES LO MISMO QUE 
    */
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// CALCULADORA MEDIANA 

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad]
        return personaMitad;
    }
}

// MEDIANA GENERAL

const salariosPeru = Peru.map(
    function (persona){
        return persona.salario;
    }
);

const salariosPeruSorted = salariosPeru.sort(
    function(a,b){
        return a - b
    }
);

const medianaGeneralPeru = medianaSalarios(salariosPeruSorted)

// MEDIANA DEL TOP 10%

const spliceStart = (salariosPeruSorted.length * 90) / 100;
const spliceCount = salariosPeruSorted.length - spliceStart;

const salariosPeruTop10 = salariosPeruSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Peru = medianaSalarios(salariosPeruTop10);

console.log({
    medianaGeneralPeru,
    medianaTop10Peru,
});