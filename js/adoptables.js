// adoptables.js (usa fetch para tomar adoptables.json; asume mismo origen)
let adoptables = [];
const listaContainer = document.getElementById("listaAdoptables");
const filtrarBtn = document.getElementById("filtrarBtn");

const pawlyRight = [
  "¡Este es muy para vos! 💚",
  "Pawly aprueba este match 😊",
  "¡Me encanta esa elección!",
  "¡Match emocional activado! 💕",
];
const pawlyLeft = [
  "No pasa nada, seguimos ✨",
  "Pawly dice: next!",
  "Alguno mejor viene...",
  "Siguiente intento 🐾",
];

async function loadData() {
  try {
    const res = await fetch("../data/adoptables.json", { cache: "no-store" });
    adoptables = await res.json();
    render(adoptables);
  } catch (e) {
    console.error("No pude cargar adoptables.json", e);
    listaContainer.innerHTML =
      "<p class='text-danger'>Error cargando adoptables.</p>";
  }
}

function render(lista) {
  listaContainer.innerHTML = "";
  lista.forEach((a) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
    col.innerHTML = `
      <div class="card shadow-sm h-100">
        <img src="${a.img}" class="card-img-top" alt="${a.nombre}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold color1">${a.nombre}</h5>
          <p class="mb-1 small color2">Tipo: ${a.tipo} • ${a.tam} • ${
      a.edad
    }</p>
          <p class="mb-3 color2">${a.desc || ""}</p>
          <div class="mt-auto">
            <button class="btn btn-outline-warning w-100 ver-btn" data-id="${
              a.id
            }">Ver más</button>
          </div>
        </div>
      </div>`;
    listaContainer.appendChild(col);
  });

  // asigno listeners a botones "Ver más" (puedes abrir modal o ir a la página tinder)
  document.querySelectorAll(".ver-btn").forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      const id = +ev.currentTarget.dataset.id;
      // acción simple: ir a sección tinder (si tenés una página independiente pone location.href = 'tinder.html?id='+id)
      // por ahora mostramos un alert o modal (tú lo reemplazás por navegación)
      const a = adoptables.find((x) => x.id === id);
      if (a) alert(`${a.nombre}\n\n${a.desc}`);
    });
  });
}

filtrarBtn.addEventListener("click", () => {
  const t = document.getElementById("filtroTipo").value;
  const s = document.getElementById("filtroTam").value;
  const e = document.getElementById("filtroEdad").value;

  const filtrado = adoptables.filter(
    (a) =>
      (t === "" || a.tipo === t) &&
      (s === "" || a.tam === s) &&
      (e === "" || a.edad === e)
  );

  if (filtrado.length === 0) {
    alert(
      "No hay adoptables que coincidan con esos filtros. Pawly recomienda ampliar un poco la búsqueda."
    );
    render(adoptables);
    return;
  }
  render(filtrado);
});

// inicializo
loadData();
