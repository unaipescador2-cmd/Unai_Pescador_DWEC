console.log("¡Hola DWEC! Mi taller ya funciona.");

const botonTema = document.querySelector("#boton-tema");

botonTema.addEventListener("click", () => {
	const modoClaroActivo = document.body.classList.toggle("modo-claro");

	botonTema.textContent = modoClaroActivo ? "🌙 Modo oscuro" : "☀️ Modo claro";
	botonTema.setAttribute("aria-pressed", String(modoClaroActivo));
});
