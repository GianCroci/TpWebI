/*-------------------------------------------Contador del carrito-----------------------------------*/

function init() {
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

init();

/*-------------------------------------------Listado del carrito----------------------------------------*/

function armarCarrito() {
    const productos = JSON.parse(localStorage.getItem('productos'));
    const productosStack = [];
    productos.forEach((producto) => {
        const productoStack = productosStack.find((p) => p.id === producto.id);
        if (productoStack) {
            productoStack.cantidad ++;
        } else {
            productosStack.push(producto);
        }
    });

    const tabla = document.getElementById("tabla");
    tabla.innerHTML = 
        `<tr>
          <th>PRODUCTO</th>
          <th>CANTIDAD</th>
          <th>PRECIO</th>
          <th>SUBTOTAL</th>
          <th class="empty"></th>
        </tr>`

    for(prod in productosStack) {

        tabla.innerHTML += 
        `<tr>
            <td class="img-carrito">
            <img src="`+ productosStack[prod].src +`" alt="" />
            </td>
            <td>`+ productosStack[prod].cantidad +`</td>
            <td>`+ productosStack[prod].precio +`</td>
            <td>`+ productosStack[prod].precio * productosStack[prod].cantidad  +`</td>
            <td class="edit-buttons">
            <i class="fa-solid fa-trash-can" id="`+ productosStack[prod].id +`"></i>
            </td>
        </tr>`
    }
    tabla.innerHTML += 
        `<tr>
          <th></th>
          <th></th>
          <th></th>
          <th class="total"></th>
          <th></th>
        </tr>`
    calcularTotales(productosStack);
}

/*---------------------------------------------------------Eliminar Curso del carrito-----------------------------------*/

addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash-can")) {
        productosFiltrados = [];
        const productos = JSON.parse(localStorage.getItem('productos'));
        productosFiltrados = [];
        console.log("productos")
        console.log(productos);
        for (prod in productos) {
            if ( productos[prod].id !== parseInt(e.target.id, 10) ) {
                productosFiltrados.push(productos[prod]);
            }
        }
        console.log("productos filtrados")
        console.log(productosFiltrados)
        localStorage.setItem('productos', JSON.stringify(productosFiltrados));
        init();
        armarCarrito();
    }
});

/*-------------------------------------------------Funcion de calcular total del precio--------------------------------*/

function calcularTotales (productos){
    document.querySelector(".total").innerHTML = "TOTAL: $ ";
    let total = 0;
    for (prod in productos) {
        total += productos[prod].precio * productos[prod].cantidad;
    }
    document.querySelector(".total").innerHTML += total;
}

armarCarrito();