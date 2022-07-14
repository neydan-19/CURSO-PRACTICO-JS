function calcularInteres(capital, tasa, tiempo, tipoDeTiempo, tipoDeInteres){
    if( tipoDeInteres === "Simple"){
        switch(tipoDeTiempo){
            case "dias" :
                var interes = (capital * tasa * tiempo) / 36000 ;
            break;
            case "meses" :
                var interes = (capital * tasa * tiempo) / 1200 ;
            break;
            case "años" :
                var interes = (capital * tasa * tiempo) / 100 ;
            break;
        } 
        
        return interes.toFixed(2);
    }
    if( tipoDeInteres === "Compuesto"){
        switch(tipoDeTiempo){
            case "dias" :
                var interes = (capital * (1 + tasa / 100)**tiempo) - capital ;
            break;
            case "meses" :
                var interes = (capital * (1 + tasa / 100)**tiempo) - capital ;
            break;
            case "años" :
                var interes = (capital * (1 + tasa / 100)**tiempo) - capital ;
            break;
        }

        return interes.toFixed(2);
    }
}

function ejecutarCalculo(){
    var capitalInput = document.getElementById("Capital");
    var capitalValue = capitalInput.value;

    var tasaInput = document.getElementById("Tasa");
    var tasaValue = tasaInput.value;

    var tiempoInput = document.getElementById("Periodo");
    var tiempoValue = tiempoInput.value;

    var tipoDeTiempoInput = document.getElementById("TipoDeTiempo");
    var tipoDeTiempoValue = tipoDeTiempoInput.value;

    var tipoDeInteresInput = document.getElementById("TipoDeInteres");
    var tipoDeInteresValue = tipoDeInteresInput.value;

    var respuestaInteres = calcularInteres(capitalValue, tasaValue, tiempoValue, tipoDeTiempoValue, tipoDeInteresValue)

    if(tipoDeInteresValue === "Simple"){
        document.getElementById("RespuestaInteresSimple").innerHTML = `${respuestaInteres}`
    }
    if(tipoDeInteresValue === "Compuesto"){
        document.getElementById("RespuestaInteresCompuesto").innerHTML = `${respuestaInteres}`
    }
}