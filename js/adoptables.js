// ================================
//  CARGA Y RENDER DE ADOPTABLES
// ================================

import { showError } from "./utils.js";

const lista = document.getElementById("listaAdoptables");
const filtroTipo = document.getElementById("filtroTipo");
const filtroTam = document.getElementById("filtroTam");
const filtroEdad = document.getElementById("filtroEdad");
const btnFiltrar = document.getElementById("filtrarBtn");

let animales = [];

// Cargar JSON
fetch("../data/adoptables.json")
  .then((res) => {
    if (!res.ok) throw new Error("No se puede cargar el archivo JSON");
    return res.json();
  })
  .then((data) => {
    animales = data;
    renderizar(animales);
  })
  .catch(() =>
    showError(
      "Uy… no se pudieron cargar los adoptables 😿 <br> de la lista de Adoptables"
    )
  );

// Render cards
function renderizar(listaAnimales) {
  lista.innerHTML = "";

  listaAnimales.forEach((animal) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    const card = document.createElement("div");
    card.className = "card shadow-sm p-2";

    // IMG segura
    const img = document.createElement("img");
    img.src = (animal.fotos && animal.fotos[0]) || "assets/placeholder.webp";
    img.className = "img-animal";
    img.alt = animal.nombre;

    // ------- HOVER con FADE -------
    if (animal.fotos && animal.fotos.length > 1) {
      img.addEventListener("mouseenter", () => {
        img.classList.add("fade-out");

        setTimeout(() => {
          img.src = animal.fotos[1];
          img.classList.remove("fade-out");
          img.classList.add("fade-in");

          setTimeout(() => img.classList.remove("fade-in"), 400);
        }, 200);
      });

      img.addEventListener("mouseleave", () => {
        img.classList.add("fade-out");

        setTimeout(() => {
          img.src = animal.fotos[0];
          img.classList.remove("fade-out");
          img.classList.add("fade-in");

          setTimeout(() => img.classList.remove("fade-in"), 400);
        }, 200);
      });
    }

    const body = document.createElement("div");
    body.className = "card-body";

    const h5 = document.createElement("h5");
    h5.classList.add("color1");
    h5.textContent = animal.nombre;

    const p = document.createElement("p");
    p.classList.add("color1");
    p.textContent = animal.desc;

    body.appendChild(h5);
    body.appendChild(p);

    card.appendChild(img);
    card.appendChild(body);
    col.appendChild(card);
    lista.appendChild(col);
  });
}

// ================================
//            FILTRO
// ================================

btnFiltrar.addEventListener("click", () => {
  const tipo = filtroTipo.value;
  const tam = filtroTam.value;
  const edad = filtroEdad.value;

  const filtrados = animales.filter((a) => {
    return (
      (tipo === "" || a.tipo === tipo) &&
      (tam === "" || a.tam === tam) &&
      (edad === "" || a.edad === edad)
    );
  });

  renderizar(filtrados);
});
