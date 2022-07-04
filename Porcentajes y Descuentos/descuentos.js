/* const precio = 120;
const descuento  = 18; */

function calcularPrecioConDescuento(Precio, Descuento){
    const porcentajePrecioConDescuento = 100 - Descuento;
    const precioConDescuento = (Precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

/* console.log({
    precio,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

function calcularResultado(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "El precio con descuento es: $" + precioConDescuento;
}
