const idAgregar = "agregar";
const idLimpiar = "limpiar";
const idListado = "contenedor";
const idInputField = "item";
const keyAlmacenamientoItems = "items";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById(idAgregar).addEventListener("click", agregarItem);
    document.getElementById(idLimpiar).addEventListener("click", limpiarListado);
    cargarListado();
});

// Limpiar la lista de items del contenedor
function limpiarListado(){
    const contenedor = document.getElementById(idListado)
    contenedor.innerHTML = "";
    localStorage.removeItem(keyAlmacenamientoItems);
}

// Agrega el nuevo item al contenedor del listado
function agregarItem(){
    const inputField = document.getElementById(idInputField);
    const textValue = inputField.value;
    if (textValue.trim() !== "") {
        const itemsGuardados = obtenerItems();
        itemsGuardados.push(textValue);
        localStorage.setItem(keyAlmacenamientoItems, JSON.stringify(itemsGuardados));

        generarItem(textValue);
    }
    inputField.value = "";
}



//Insertar todos los items desde el localStorage al contenedor
function cargarListado(){
    const itemsGuardados = obtenerItems();
    itemsGuardados.forEach(itemText => {
        generarItem(itemText)
    });
}

// Obtiene el array de items del localStorage
function obtenerItems(){
    return JSON.parse(localStorage.getItem(keyAlmacenamientoItems)) || [];
}


// Al insertar un texto, se genera un li en el contenedor
function generarItem(text){
    const contenedorLista = document.getElementById(idListado)
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;

    li.appendChild(p);
    contenedorLista.appendChild(li);
};

