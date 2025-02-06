// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
const botonSorteo = document.querySelector('.button-draw');

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        listaDeAmigos.push(nombre);

        const mostrarListaDeAmigos = document.getElementById("listaAmigos");

        mostrarListaDeAmigos.innerHTML = "";

        for (let i = 0; i < listaDeAmigos.length; i++) {
            let item = document.createElement("li");
            item.textContent = listaDeAmigos[i];
            mostrarListaDeAmigos.appendChild(item);
        }

        document.getElementById("amigo").value = "";

        botonSorteo.disabled = listaDeAmigos.length < 2;
    }
}

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});

function sortearAmigo() {
    if (listaDeAmigos.length >= 2) {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let nombreSorteado = listaDeAmigos[indiceAleatorio];
        const mostrarResultado = document.getElementById("resultado");
        mostrarResultado.innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;
    
        botonSorteo.disabled = true;
    } else {
        alert("¡Necesitas al mentos 2 amigos para jugar!");
    }
}