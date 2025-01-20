// Array para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('nombreAmigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";

    // Actualizar la lista visual
    actualizarLista();
}

// Función para actualizar la lista HTML
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (const amigo of amigos) {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validar que haya amigos en el array
    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista para sortear.";
        return;
    }

    // Generar un índice aleatorio
    const randomIndex = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo seleccionado
    const seleccionarAmigo = amigos[randomIndex];

    // Mostrar el nombre sorteado
    resultado.innerHTML = `El amigo seleccionado es: <strong>${seleccionarAmigo}</strong>`;
}