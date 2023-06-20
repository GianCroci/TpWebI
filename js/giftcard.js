let botonRojo = document.querySelector(".punto_color_rojo");
let texto = document.querySelector(".DESTINATARIO");

botonRojo.addEventListener("click",()=>{
    texto.classList.toggle("punto_color_rojo");

})