// Lista de productos
let cardProds = [
  {
    img: "./assets/imagenes/Productos/peluches.jpeg",
    title: "Peluches",
    text: "",
    price: "9990",
  },
  {
    img: "./assets/imagenes/Productos/bebedero_fuente.jpeg",
    title: "Bebedero",
    text: "",
    price: "25500",
  },
  {
    img: "./assets/imagenes/Productos/mordedor_goma.webp",
    title: "Mordedor",
    text: "",
    price: "2490",
  },
  {
    img: "./assets/imagenes/Productos/raton_multicolor.jpeg",
    title: "Ratones",
    text: "",
    price: "4360",
  },
  {
    img: "./assets/imagenes/Productos/potes_plasticos.jpeg",
    title: "Potes",
    text: "",
    price: "7320",
  },
  {
    img: "./assets/imagenes/Productos/juguete_interactivo.jpg",
    title: "Juguete 01",
    text: "",
    price: "23160",
  },
  {
    img: "./assets/imagenes/Productos/alfombra_olfativa.jpg",
    title: "Alfombra",
    text: "",
    price: "7590",
  },
  {
    img: "./assets/imagenes/Productos/pez_electrico.jpg",
    title: "Pez Eléctrico",
    text: "",
    price: "28690",
  },
  {
    img: "./assets/imagenes/Productos/comedero_automatico.jpg",
    title: "Comedero 01",
    text: "",
    price: "15380",
  },
  {
    img: "./assets/imagenes/Productos/comedero_elevado.jpeg",
    title: "Comedero 02",
    text: "",
    price: "14980",
  },
  {
    img: "./assets/imagenes/Productos/comedero_elevado.jpeg",
    title: "Comedero 03",
    text: "",
    price: "18780",
  },
  {
    img: "./assets/imagenes/Productos/comedero_elevado.jpeg",
    title: "Comedero 04",
    text: "",
    price: "21680",
  },
];

// Guardar en localStorage
const jsonStr = JSON.stringify(cardProds);
localStorage.setItem("productos", jsonStr);

// Recuperar de localStorage
const dataSave = JSON.parse(localStorage.getItem("productos"));

// Función para renderizar las cards en el HTML
function renderCards(cards) {
  const container = document.querySelector(".prod-container");
  container.innerHTML = ""; // Limpiar el contenedor

  for (let i = 0; i < cards.length; i += 3) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = i; j < i + 3 && j < cards.length; j++) {
      const card = cards[j];
      const cardElement = document.createElement("div");
      cardElement.className = "cardProd col-md-4";
      cardElement.innerHTML = `
        <img src="${card.img}" alt="${card.title}">
        <h4>${card.title}</h4>
        <p>${card.text}</p>
        <p>Precio: $${card.price}</p>
        <button onclick="addToCart(${j})">¡Lo  quiero!</button>
      `;
      row.appendChild(cardElement);
    }

    container.appendChild(row);
  }
}

// Función para agregar productos al carrito
let cart = [];

function addToCart(index) {
  const product = dataSave[index];
  cart.push(product);
  console.log("Producto agregado al carrito:", product);
}

// Llamar a la función para renderizar las cards
renderCards(dataSave);
