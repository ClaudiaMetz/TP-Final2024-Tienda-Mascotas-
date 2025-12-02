// Mostrar errores en consola y en pantalla
export function showError(message, containerSelector = null) {
  console.error(message);

  if (containerSelector) {
    const cont = document.querySelector(containerSelector);
    if (cont) {
      cont.innerHTML = `
        <div class="alert alert-danger text-center p-3 mt-3">
          ${message}
        </div>
      `;
    }
  }
}
