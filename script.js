document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");

    // Mostrar/Ocultar descripciones de carreras
    const botonesVerMas = document.querySelectorAll(".ver-mas");
    
    botonesVerMas.forEach(boton => {
        boton.addEventListener("click", function() {
            const descripcion = this.nextElementSibling;
            if (descripcion.style.display === "none" || descripcion.style.display === "") {
                descripcion.style.display = "block";
                this.textContent = "Ver menos";
            } else {
                descripcion.style.display = "none";
                this.textContent = "Conocer más";
            }
        });
    });

    // Manejo del formulario de inscripción
    document.getElementById("formulario-inscripcion").addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const fecha = document.getElementById("fecha").value;
        const tipoPago = document.getElementById("tipo").value;
        const mensaje = document.getElementById("mensaje-inscripcion");

        if (nombre && fecha) {
            mensaje.textContent = `✅ ${nombre}, estás inscrito correctamente en la opción de ${tipoPago}.`;
        } else {
            mensaje.textContent = "❌ Por favor, completa todos los campos.";
        }
    });
});
document.querySelectorAll(".show-more").forEach(button => {
    button.addEventListener("click", function() {
        const description = this.previousElementSibling;
        description.classList.toggle("hidden");
        this.textContent = description.classList.contains("hidden") ? "Conocer más" : "Mostrar menos";
    });
});
