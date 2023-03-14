// mensaje para pestaña

let previousTitle = document.title

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = 'No te vayas ! Vuelve !'
})

window.addEventListener('focus', () => {
    previousTitle = document.title
    document.title = 'Programacion - Modulo - Primer Parcial'
})

// musica para la pagina index
var musica = document.getElementById("musica"); // Obtener la etiqueta de audio
var botonMusica = document.getElementById("boton-musica"); // Obtener el botón de encendido / apagado

botonMusica.addEventListener("click", function () {
    if (musica.paused) { // Si la música está pausada, comenzar a reproducirla
        musica.play();
        botonMusica.innerHTML = "Apagar";
    } else { // Si la música está reproduciéndose, pausarla
        musica.pause();
        botonMusica.innerHTML = "Encender";
    }
});
