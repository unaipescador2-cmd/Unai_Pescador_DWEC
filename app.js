console.log("¡Hola DWEC! Mi taller ya funciona.");

const botonTema = document.querySelector("#boton-tema");
const botonPulsar = document.querySelector("#boton-pulsar");
const contador = document.querySelector("#contador");

let clics = 0;

botonTema.addEventListener("click", () => {
	const modoClaroActivo = document.body.classList.toggle("modo-claro");

	botonTema.textContent = modoClaroActivo ? "🌙 Modo oscuro" : "☀️ Modo claro";
	botonTema.setAttribute("aria-pressed", String(modoClaroActivo));
});

botonPulsar.addEventListener("click", () => {
	clics += 1;
	contador.textContent = clics;
});
