

let botonComprar = document.querySelectorAll(".boton_comprar")
let conteo = 1;
botonComprar.forEach((item)=>{
    item.addEventListener("click", function(){
        document.querySelector(".contador").innerHTML = conteo++;
    })
}

)