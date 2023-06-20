
    let formulario = document.querySelector(".formulario");
    let botonAgregarPersona = document.querySelector(".icono_container")
    let form = document.getElementById("form");

    form.addEventListener("click", (e)=>{
        e.preventDefault();
        
    })

    botonAgregarPersona.addEventListener("click", ()=>{
        formulario.innerHTML += 
        `<div class="bloques">
                        <input class="primer_b" type="text" name="nombre" id="nombre" placeholder="Apellido y nombre" required>
                        <input class="primero_c" type="email" name="email" id="email" placeholder="Usuario123@gmail.com" required>
                        <input class="primero_d" type="text" name="curso" id="curso"placeholder="Nombre del curso" required>  
                        <div class="container_menos">
                            <i class="fa-solid fa-minus" style="color: #ffffff;"></i>
                        </div>
                </div> ` 
        
    })
