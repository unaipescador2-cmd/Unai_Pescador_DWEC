

const videojuegos = [
	{
		nombre: "Cruelty Squad",
		compania: "Consumer Softproducts",
		plataforma: "PC",
		valoracion: "8,4/10",
		precio: "19,99 €"
	},
	{
		nombre: "Hylics 2",
		compania: "Mason Lindroth",
		plataforma: "PC",
		valoracion: "8,7/10",
		precio: "14,99 €"
	},
	{
		nombre: "Hypnospace Outlaw",
		compania: "Tendershoot",
		plataforma: "PC, Nintendo Switch",
		valoracion: "8,9/10",
		precio: "19,99 €"
	},
	{
		nombre: "Frog Detective 2: The Case of the Invisible Wizard",
		compania: "Worm Club",
		plataforma: "PC, Nintendo Switch",
		valoracion: "8,2/10",
		precio: "7,99 €"
	},
	{
		nombre: "Katamari Damacy REROLL",
		compania: "Bandai Namco Entertainment",
		plataforma: "PC, Nintendo Switch, PlayStation",
		valoracion: "8,8/10",
		precio: "29,99 €"
	}
];

const cuerpoVideojuegos = document.querySelector("#cuerpo-videojuegos");

if (cuerpoVideojuegos) {
	videojuegos.forEach((videojuego) => {
		const fila = cuerpoVideojuegos.insertRow();

		fila.insertCell().textContent = videojuego.nombre;
		fila.insertCell().textContent = videojuego.compania;
		fila.insertCell().textContent = videojuego.plataforma;
		fila.insertCell().textContent = videojuego.valoracion;
		fila.insertCell().textContent = videojuego.precio;
	});
}

const botonTema = document.querySelector("#boton-tema");
const botonPulsar = document.querySelector("#boton-pulsar");
const contador = document.querySelector("#contador");

let clics = 0;

if (botonTema) {
	botonTema.addEventListener("click", () => {
		const modoClaroActivo = document.body.classList.toggle("modo-claro");

		botonTema.textContent = modoClaroActivo ? "🌙 Modo oscuro" : "☀️ Modo claro";
		botonTema.setAttribute("aria-pressed", String(modoClaroActivo));
	});
}

if (botonPulsar && contador) {
	botonPulsar.addEventListener("click", () => {
		clics += 1;
		contador.textContent = clics;
	});
}
