let cards = [
  {
    img: "./assets/imagenes/Productos/peluches.jpeg",
    tittle: "Peluches",
    text: "",
    price: "9990",
  },
  {
    img: "./assets/imagenes/Productos/bebedero_fuente.jpeg",
    tittle: "Bebedero",
    text: "",
    price: "25500",
  },
  {
    img: "./assets/imagenes/Productos/mordedor_goma.webp",
    tittle: "Mordedor",
    text: "",
    price: "2490",
  },
  {
    img: "./assets/imagenes/Productos/raton_multicolor.jpeg",
    tittle: "Ratones",
    text: "",
    price: "4360",
  },
  {
    img: "./assets/imagenes/Productos/potes_plasticos.jpeg",
    tittle: "Potes",
    text: "",
    price: "7320",
  },
  {
    img: "./assets/imagenes/Productos/juguete_interactivo.jpg",
    tittle: "Juguete 01",
    text: "",
    price: "23160",
  },
  {
    img: "./assets/imagenes/Productos/alfombra_olfativa.jpg",
    tittle: "Alfombra",
    text: "",
    price: "7590",
  },
  {
    img: "./assets/imagenes/Productos/pez_electrico.jpg",
    tittle: "Pez Eléctrico",
    text: "",
    price: "28690",
  },
  {
    img: "./assets/imagenes/Productos/comedero_automatico.jpg",
    tittle: "Comedero 01",
    text: "",
    price: "15380",
  },
  {
    img: "./assets/imagenes/Productos/comedero_elevado.jpeg",
    tittle: "Comedero 02",
    text: "",
    price: "14980",
  },
]; // Esta es la lista para todas las cardProds cargadas hasta ahora

let currentStart = 0;

//función para mostrar las cardProds en sección PRODUCTOS

function displayCards(start) {
  let end = start + 12;
  if (end > cards.length) end = cards.length;

  let container = document.getElementById("card-container");
  container.innerHTML = "";

  for (let i = start; i < end; i++) {
    let cardData = cards[i];
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.src = cardData.img;
    img.alt = "Imagen";
    img.className = "card-img";
    card.appendChild(img);

    let text = document.createElement("div");
    text.innerText = cardData.text;
    text.className = "card-text";
    card.appendChild(text);

    container.appendChild(card);
  }
}

document.getElementById("adelante").addEventListener("click", function () {
  if (currentStart + 12 < cards.length) {
    currentStart += 12;
    displayCards(currentStart);
  }
});

document.getElementById("atras").addEventListener("click", function () {
  if (currentStart - 12 >= 0) {
    currentStart -= 12;
    displayCards(currentStart);
  }
});

displayCards(currentStart);
// Muestra las primeras 12 cards al cargar la página

//------------------------------------------

//función para mostrar las cards en sección ACLAMADAS

function displayFourCards() {
  var container = document.getElementById("prod-container");

  container.innerHTML = "";

  for (var i = 0; i < cards.length; i++) {
    var movieDiv = document.createElement("div");
    movieDiv.className = "movie";

    var img = document.createElement("img");
    img.src = cards[i].img;
    img.alt = cards[i].text;

    /*var p = document.createElement("p");
    p.textContent = cards[i].text;*/

    movieDiv.appendChild(img);
    /*movieDiv.appendChild(p);*/

    container.appendChild(movieDiv);
  }
}

window.onload = function () {
  displayFourCards();
};
// Muestra las primeras 4 cards al cargar la página y se ve el resto corriendo la barra

//--------------------------------
