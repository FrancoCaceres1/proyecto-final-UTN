const llamadaApi = fetch("https://rickandmortyapi.com/api/character");
const $gridPersonajes = document.querySelector(".div-personajes");
const $botonAnterior = document.querySelector(".boton-1-presentacion");
const $botonSiguiente = document.querySelector(".boton-2-presentacion");
const $imagenCero = document.querySelector(".posicion-0");
const $imagenUno = document.querySelector(".posicion-1");
const $imagenDos = document.querySelector(".posicion-2");
const $imagenTres = document.querySelector(".posicion-3");
const $imagenCuatro = document.querySelector(".posicion-4");

$botonAnterior.addEventListener("click", imagenAnterior);
$botonSiguiente.addEventListener("click", imagenSiguiente);

function imagenSiguiente() {
  if ($imagenCero.classList.contains('imagen-0')) {
    $imagenCero.classList.replace('imagen-0', 'imagen-1')
    $imagenUno.classList.replace('imagen-1', 'imagen-2')
    $imagenDos.classList.replace('imagen-2', 'imagen-3')
    $imagenTres.classList.replace('imagen-3', 'imagen-4')
    $imagenCuatro.classList.replace('imagen-4', 'imagen-0')
    $imagenCero.classList.add("imagen-presentacion-0")
  } else if ($imagenUno.classList.contains('imagen-0')) {
    $imagenUno.classList.replace('imagen-0', 'imagen-1')
    $imagenCero.classList.replace('imagen-4', 'imagen-0')
    $imagenDos.classList.replace('imagen-1', 'imagen-2')
    $imagenTres.classList.replace('imagen-2', 'imagen-3')
    $imagenCuatro.classList.replace('imagen-3', 'imagen-4')
  } else if ($imagenDos.classList.contains('imagen-0')) {
    $imagenDos.classList.replace('imagen-0', 'imagen-1')
    $imagenUno.classList.replace('imagen-4', 'imagen-0')
    $imagenCero.classList.replace('imagen-3', 'imagen-4')
    $imagenTres.classList.replace('imagen-1', 'imagen-2')
    $imagenCuatro.classList.replace('imagen-2', 'imagen-3')
    $imagenCero.classList.remove("imagen-presentacion-0")
  } else if ($imagenTres.classList.contains('imagen-0')) {
    $imagenTres.classList.replace('imagen-0', 'imagen-1')
    $imagenDos.classList.replace('imagen-4', 'imagen-0')
    $imagenUno.classList.replace('imagen-3', 'imagen-4')
    $imagenCero.classList.replace('imagen-2', 'imagen-3')
    $imagenCuatro.classList.replace('imagen-1', 'imagen-2')
    $imagenCero.classList.add("imagen-presentacion-0")
  } else if ($imagenCuatro.classList.contains('imagen-0')) {
    $imagenCuatro.classList.replace('imagen-0', 'imagen-1')
    $imagenTres.classList.replace('imagen-4', 'imagen-0')
    $imagenDos.classList.replace('imagen-3', 'imagen-4')
    $imagenUno.classList.replace('imagen-2', 'imagen-3')
    $imagenCero.classList.replace('imagen-1', 'imagen-2')
    $imagenCero.classList.remove("imagen-presentacion-0")
  };
};

function imagenAnterior() {
  if ($imagenCero.classList.contains('imagen-0')) {
    $imagenCero.classList.replace('imagen-0', 'imagen-4')
    $imagenUno.classList.replace('imagen-1', 'imagen-0')
    $imagenDos.classList.replace('imagen-2', 'imagen-1')
    $imagenTres.classList.replace('imagen-3', 'imagen-2')
    $imagenCuatro.classList.replace('imagen-4', 'imagen-3')
  } else if ($imagenUno.classList.contains('imagen-0')) {
    $imagenUno.classList.replace('imagen-0', 'imagen-4')
    $imagenCero.classList.replace('imagen-4', 'imagen-3')
    $imagenDos.classList.replace('imagen-1', 'imagen-0')
    $imagenTres.classList.replace('imagen-2', 'imagen-1')
    $imagenCuatro.classList.replace('imagen-3', 'imagen-2')
  } else if ($imagenDos.classList.contains('imagen-0')) {
    $imagenDos.classList.replace('imagen-0', 'imagen-4')
    $imagenUno.classList.replace('imagen-4', 'imagen-3')
    $imagenCero.classList.replace('imagen-3', 'imagen-2')
    $imagenTres.classList.replace('imagen-1', 'imagen-0')
    $imagenCuatro.classList.replace('imagen-2', 'imagen-1')
  } else if ($imagenTres.classList.contains('imagen-0')) {
    $imagenTres.classList.replace('imagen-0', 'imagen-4')
    $imagenDos.classList.replace('imagen-4', 'imagen-3')
    $imagenUno.classList.replace('imagen-3', 'imagen-2')
    $imagenCero.classList.replace('imagen-2', 'imagen-1')
    $imagenCuatro.classList.replace('imagen-1', 'imagen-0')
    $imagenCero.classList.add("imagen-presentacion-0")
  } else if ($imagenCuatro.classList.contains('imagen-0')) {
    $imagenCuatro.classList.replace('imagen-0', 'imagen-4')
    $imagenTres.classList.replace('imagen-4', 'imagen-3')
    $imagenDos.classList.replace('imagen-3', 'imagen-2')
    $imagenUno.classList.replace('imagen-2', 'imagen-1')
    $imagenCero.classList.replace('imagen-1', 'imagen-0')
    $imagenCero.classList.remove("imagen-presentacion-0")
  };
};

llamadaApi.then((data) => {
  return data.json();
}).then((data) => {

  const personajes = data.results;
  console.log(personajes);

  for(let i = 0; i < personajes.length; i++) {
    $gridPersonajes.innerHTML += `
    <div class= "fondo-carta">
      <div class="personaje-grid">
        <img class="imagen-personaje" src="${personajes[i].image}">
      <div class= "descripcion-personaje">
      <div class= "nombre-personaje">
        <h2>${personajes[i].name}</h2>
      </div>
      <div class = "atributos-personaje">
        <p>gender: ${personajes[i].gender}</p>
        <p>species: ${personajes[i].species}</p>
        <p>status: ${personajes[i].status}</p>
      </div>
    </div>
  </div>
    </div>
      
    `
  }
});