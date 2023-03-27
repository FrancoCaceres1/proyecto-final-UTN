; const llamadaApi = fetch("https://rickandmortyapi.com/api/character");
const $gridPersonajes = document.querySelector(".div-personajes");
const $botonAnterior = document.querySelector(".boton-1-presentacion");
const $botonSiguiente = document.querySelector(".boton-2-presentacion");
const $imagenCero = document.querySelector(".posicion-0");
const $imagenUno = document.querySelector(".posicion-1");
const $imagenDos = document.querySelector(".posicion-2");
const $imagenTres = document.querySelector(".posicion-3");
const $imagenCuatro = document.querySelector(".posicion-4");
const $botonMenu = document.querySelector(".boton-menu");
const $navegacion = document.querySelector(".navegacion-no");
const $seccion2 = document.querySelector(".section-2");
const $encabezado = document.querySelector(".encabezado");
const $imagenEncabezado = document.querySelector(".imagen-encabezado");
const $tituloEncabezado = document.querySelector(".imagen-titulo");
const $menuEncabezado = document.querySelector(".boton-menu");
const $navegacionEncabezado = document.querySelector(".navegacion-no");
const footer = document.getElementById("footer");

const $posicionSeccion = $seccion2.offsetTop;

$botonAnterior.addEventListener("click", imagenAnterior);
$botonSiguiente.addEventListener("click", imagenSiguiente);
$botonMenu.addEventListener("click", abrirMenu);
window.addEventListener("scroll", estaFuera);

function estaFuera() {
  const posicionDeLaBarra = window.scrollY;
  if (posicionDeLaBarra >= $posicionSeccion) {
    $encabezado.classList.replace("encabezado", "encabezado-fijado")
    $imagenEncabezado.classList.replace("imagen-encabezado", "imagen-encabezado-fijado")
    $tituloEncabezado.classList.replace("imagen-titulo", "imagen-titulo-fijado")
    $menuEncabezado.classList.replace("boton-menu", "boton-menu-fijado")
    $navegacionEncabezado.classList.replace("navegacion-no", "navegacion-fijado")
  } else {
    $encabezado.classList.replace("encabezado-fijado", "encabezado")
    $imagenEncabezado.classList.replace("imagen-encabezado-fijado", "imagen-encabezado")
    $tituloEncabezado.classList.replace("imagen-titulo-fijado", "imagen-titulo")
    $menuEncabezado.classList.replace("boton-menu-fijado", "boton-menu")
    $navegacionEncabezado.classList.replace("navegacion-fijado", "navegacion-no")
  }
}

function abrirMenu() {
  const posicionDeLaBarra = window.scrollY;
  if ($botonMenu.classList.contains("boton-menu")) {
    $botonMenu.classList.replace("boton-menu", "boton-menu-cerrar");
    $navegacion.classList.replace("navegacion-no", "navegacion")
  } else {
    $botonMenu.classList.replace("boton-menu-cerrar", "boton-menu");
    $navegacion.classList.replace("navegacion", "navegacion-no")
  }
}

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
  for (let i = 0; i < personajes.length; i++) {
    $gridPersonajes.innerHTML += `
    <div class= "fondo-carta">
      <div class="personaje-grid">
        <img class="imagen-personaje" src="${personajes[i].image}">
        <div class= "descripcion-personaje">
          <div class= "nombre-personaje">
            <h2>${personajes[i].name}</h2>
          </div>
        </div>
        <div class= "boton-informacion carta-${i}">
            <p>More About</p>
        </div>
        <div class= "reverso-de-carta-no atras-${i}">
          <div class = "atributos-personaje">
            <div class= "gender">
            <h3 class= "info">Specie</h3>
            <p class= "info">${personajes[i].species}</p>
            </div>
            <div class= "status">
              <h3 class= "info">Gender</h3>
              <p class= "info">${personajes[i].gender}</p>
            </div>
            <div class= "species">
            <h3 class= "info">Status</h3>
            <p class= "info">${personajes[i].status}</p>
            </didv>
          </div>
        </div>
      </div>
    </div>
    `
  }

  const $cartaReversoCero = document.querySelector(".atras-0");
  const $cartaReversoUno = document.querySelector(".atras-1");
  const $cartaReversoDos = document.querySelector(".atras-2");
  const $cartaReversoTres = document.querySelector(".atras-3");
  const $cartaReversoCuatro = document.querySelector(".atras-4");
  const $cartaReversoCinco = document.querySelector(".atras-5");
  const $cartaReversoSeis = document.querySelector(".atras-6");
  const $cartaReversoSiete = document.querySelector(".atras-7");
  const $cartaReversoOcho = document.querySelector(".atras-8");
  const $cartaReversoNueve = document.querySelector(".atras-9");
  const $cartaReversoDiez = document.querySelector(".atras-10");
  const $cartaReversoOnce = document.querySelector(".atras-11");
  const $cartaReversoDoce = document.querySelector(".atras-12");
  const $cartaReversoTrece = document.querySelector(".atras-13");
  const $cartaReversoCatorce = document.querySelector(".atras-14");
  const $cartaReversoQuince = document.querySelector(".atras-15");
  const $cartaReversoDieciseis = document.querySelector(".atras-16");
  const $cartaReversoDiecisiete = document.querySelector(".atras-17");
  const $cartaReversoDieciocho = document.querySelector(".atras-18");
  const $cartaReversoDiecinueve = document.querySelector(".atras-19");
  const $cartaCero = document.querySelector(".carta-0");
  const $cartaUno = document.querySelector(".carta-1");
  const $cartaDos = document.querySelector(".carta-2");
  const $cartaTres = document.querySelector(".carta-3");
  const $cartaCuatro = document.querySelector(".carta-4");
  const $cartaCinco = document.querySelector(".carta-5");
  const $cartaSeis = document.querySelector(".carta-6");
  const $cartaSiete = document.querySelector(".carta-7");
  const $cartaOcho = document.querySelector(".carta-8");
  const $cartaNueve = document.querySelector(".carta-9");
  const $cartaDiez = document.querySelector(".carta-10");
  const $cartaOnce = document.querySelector(".carta-11");
  const $cartaDoce = document.querySelector(".carta-12");
  const $cartaTrece = document.querySelector(".carta-13");
  const $cartaCatorce = document.querySelector(".carta-14");
  const $cartaQuince = document.querySelector(".carta-15");
  const $cartaDieciseis = document.querySelector(".carta-16");
  const $cartaDiecisiete = document.querySelector(".carta-17");
  const $cartaDieciocho = document.querySelector(".carta-18");
  const $cartaDiecinueve = document.querySelector(".carta-19");

  $cartaCero.addEventListener("click", masInformacion);
  $cartaUno.addEventListener("click", masInformacion1);
  $cartaDos.addEventListener("click", masInformacion2);
  $cartaTres.addEventListener("click", masInformacion3);
  $cartaCuatro.addEventListener("click", masInformacion4);
  $cartaCinco.addEventListener("click", masInformacion5);
  $cartaSeis.addEventListener("click", masInformacion6);
  $cartaSiete.addEventListener("click", masInformacion7);
  $cartaOcho.addEventListener("click", masInformacion8);
  $cartaNueve.addEventListener("click", masInformacion9);
  $cartaDiez.addEventListener("click", masInformacion10);
  $cartaOnce.addEventListener("click", masInformacion11);
  $cartaDoce.addEventListener("click", masInformacion12);
  $cartaTrece.addEventListener("click", masInformacion13);
  $cartaCatorce.addEventListener("click", masInformacion14);
  $cartaQuince.addEventListener("click", masInformacion15);
  $cartaDieciseis.addEventListener("click", masInformacion16);
  $cartaDiecisiete.addEventListener("click", masInformacion17);
  $cartaDieciocho.addEventListener("click", masInformacion18);
  $cartaDiecinueve.addEventListener("click", masInformacion19);

  function masInformacion() {
    if ($cartaCero.classList.contains("boton-informacion")) {
      $cartaReversoCero.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaCero.classList.replace('boton-informacion', 'boton-atras');
    }
    else {
      $cartaReversoCero.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaCero.classList.replace('boton-atras', 'boton-informacion');
    }
  }
  function masInformacion1() {
    if ($cartaUno.classList.contains("boton-informacion")) {
      $cartaReversoUno.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaUno.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoUno.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaUno.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion2() {
    if ($cartaDos.classList.contains("boton-informacion")) {
      $cartaReversoDos.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaDos.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoDos.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaDos.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion3() {
    if ($cartaTres.classList.contains("boton-informacion")) {
      $cartaReversoTres.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaTres.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoTres.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaTres.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion4() {
    if ($cartaCuatro.classList.contains("boton-informacion")) {
      $cartaReversoCuatro.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaCuatro.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoCuatro.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaCuatro.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion5() {
    if ($cartaCinco.classList.contains("boton-informacion")) {
      $cartaReversoCinco.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaCinco.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoCinco.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaCinco.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion6() {
    if ($cartaSeis.classList.contains("boton-informacion")) {
      $cartaReversoSeis.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaSeis.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoSeis.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaSeis.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion7() {
    if ($cartaSiete.classList.contains("boton-informacion")) {
      $cartaReversoSiete.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaSiete.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoSiete.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaSiete.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion8() {
    if ($cartaOcho.classList.contains("boton-informacion")) {
      $cartaReversoOcho.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaOcho.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoOcho.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaOcho.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion9() {
    if ($cartaNueve.classList.contains("boton-informacion")) {
      $cartaReversoNueve.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaNueve.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoNueve.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaNueve.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion10() {
    if ($cartaDiez.classList.contains("boton-informacion")) {
      $cartaReversoDiez.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaDiez.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoDiez.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaDiez.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion11() {
    if ($cartaOnce.classList.contains("boton-informacion")) {
      $cartaReversoOnce.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaOnce.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoOnce.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaOnce.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion12() {
    if ($cartaDoce.classList.contains("boton-informacion")) {
      $cartaReversoDoce.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaDoce.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoDoce.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaDoce.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion13() {
    if ($cartaTrece.classList.contains("boton-informacion")) {
      $cartaReversoTrece.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaTrece.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoTrece.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaTrece.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion14() {
    if ($cartaCatorce.classList.contains("boton-informacion")) {
      $cartaReversoCatorce.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaCatorce.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoCatorce.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaCatorce.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion15() {
    if ($cartaQuince.classList.contains("boton-informacion")) {
      $cartaReversoQuince.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaQuince.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoQuince.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaQuince.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion16() {
    if ($cartaDieciseis.classList.contains("boton-informacion")) {
      $cartaReversoDieciseis.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaDieciseis.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoDieciseis.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaDieciseis.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion17() {
    if ($cartaDiecisiete.classList.contains("boton-informacion")) {
      $cartaReversoDiecisiete.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaDiecisiete.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoDiecisiete.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaDiecisiete.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion18() {
    if ($cartaDieciocho.classList.contains("boton-informacion")) {
      $cartaReversoDieciocho.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaDieciocho.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoDieciocho.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaDieciocho.classList.replace('boton-atras', 'boton-informacion')
    }
  }
  function masInformacion19() {
    if ($cartaDiecinueve.classList.contains("boton-informacion")) {
      $cartaReversoDiecinueve.classList.replace("reverso-de-carta-no", "reverso-de-carta");
      $cartaDiecinueve.classList.replace('boton-informacion', 'boton-atras')
    }
    else {
      $cartaReversoDiecinueve.classList.replace("reverso-de-carta", "reverso-de-carta-no");
      $cartaDiecinueve.classList.replace('boton-atras', 'boton-informacion')
    }
  }
});