/*function init() {
    const productosStorageLength = JSON.parse(localStorage.getItem('productos')).length;
    document.querySelector(".contador").innerHTML = productosStorageLength;
}

function agregarAlCarrito(producto) {
    const productos = [];
    const productosStorage = localStorage.getItem('productos');
    if (productosStorage) {
        productos.push(...JSON.parse(productosStorage));
    }
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
    document.querySelector(".contador").innerHTML = productos.length;
}	   

init();*/