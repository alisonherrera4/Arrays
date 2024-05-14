let compras = [];

function agregarProducto() {
    
    let nombreProducto = prompt("Ingrese el nombre del nuevo producto:");
    let precioProducto = parseFloat(prompt("Ingrese el precio del nuevo producto:"));

    let nuevoProducto = { nombre: nombreProducto, precio: precioProducto };

    compras.push(nuevoProducto);

    console.log("Lista de compras:", compras);
}
agregarProducto();