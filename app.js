

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
const botonTema = document.querySelector("#boton-tema");
const botonPulsar = document.querySelector("#boton-pulsar");
const contador = document.querySelector("#contador");
const formularioContacto = document.querySelector("#formulario-contacto");
const mensajeFormulario = document.querySelector("#mensaje-formulario");
const formularioVideojuegos = document.querySelector("#formulario-videojuegos");
const botonAnadir = document.querySelector("#boton-anadir");
const mensajeAnadir = document.querySelector("#mensaje-anadir");

function guardarFormulario(formulario) {
	if (!formulario || !window.localStorage) {
		return;
	}

	const datos = {};

	Array.from(formulario.elements).forEach((campo) => {
		const esCampoValido = campo.name && campo.tagName !== "BUTTON" && !["submit", "reset"].includes(campo.type);
		if (esCampoValido) {
			datos[campo.name] = campo.value;
		}
	});

	localStorage.setItem(formulario.id, JSON.stringify(datos));
}

function restaurarFormulario(formulario) {
	if (!formulario || !window.localStorage) {
		return;
	}

	const datosGuardados = localStorage.getItem(formulario.id);
	if (!datosGuardados) {
		return;
	}

	try {
		const datos = JSON.parse(datosGuardados);
		Object.entries(datos).forEach(([nombre, valor]) => {
			const campo = formulario.elements.namedItem(nombre);
			if (campo) {
				campo.value = valor;
			}
		});
	} catch (error) {
		console.warn("No se pudieron restaurar los datos del formulario:", error);
	}
}

function pintarTabla() {
	if (!cuerpoVideojuegos) {
		return;
	}

	cuerpoVideojuegos.innerHTML = "";

	videojuegos.forEach((videojuego) => {
		const fila = cuerpoVideojuegos.insertRow();

		fila.insertCell().textContent = videojuego.nombre;
		fila.insertCell().textContent = videojuego.compania;
		fila.insertCell().textContent = videojuego.plataforma;
		fila.insertCell().textContent = videojuego.valoracion;
		fila.insertCell().textContent = videojuego.precio;
	});
}

if (cuerpoVideojuegos) {
	pintarTabla();
}

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

if (formularioContacto && mensajeFormulario) {
	restaurarFormulario(formularioContacto);
	formularioContacto.addEventListener("input", () => guardarFormulario(formularioContacto));
	formularioContacto.addEventListener("change", () => guardarFormulario(formularioContacto));

	formularioContacto.addEventListener("submit", (evento) => {
		evento.preventDefault();

		const nombre = formularioContacto.nombre.value.trim();
		const apellidos = formularioContacto.apellidos.value.trim();
		const correo = formularioContacto.correo.value.trim();
		const mensaje = formularioContacto.mensaje.value.trim();

		if (!nombre || !apellidos || !correo || !mensaje) {
			mensajeFormulario.textContent = "Rellena todos los campos antes de enviar.";
			mensajeFormulario.classList.remove("exito");
			mensajeFormulario.classList.add("error");
			return;
		}

		const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
		if (!emailValido) {
			mensajeFormulario.textContent = "Introduce un correo electrónico válido.";
			mensajeFormulario.classList.remove("exito");
			mensajeFormulario.classList.add("error");
			return;
		}

		mensajeFormulario.textContent = `Gracias ${nombre}, tu mensaje ha sido enviado correctamente.`;
		mensajeFormulario.classList.remove("error");
		mensajeFormulario.classList.add("exito");
		formularioContacto.reset();
		localStorage.removeItem(formularioContacto.id);
	});
}

if (formularioVideojuegos && botonAnadir && mensajeAnadir) {
	restaurarFormulario(formularioVideojuegos);
	formularioVideojuegos.addEventListener("input", () => guardarFormulario(formularioVideojuegos));
	formularioVideojuegos.addEventListener("change", () => guardarFormulario(formularioVideojuegos));

	botonAnadir.addEventListener("click", (evento) => {
		evento.preventDefault();

		const nombre = document.querySelector("#nombre-juego").value.trim();
		const compania = document.querySelector("#compania-juego").value.trim();
		const plataforma = document.querySelector("#plataforma-juego").value.trim();
		const valoracion = document.querySelector("#valoracion-juego").value.trim();
		const precio = document.querySelector("#precio-juego").value.trim();

		if (!nombre || !compania || !plataforma || !valoracion || !precio) {
			mensajeAnadir.textContent = "Completa todos los campos para añadir un juego.";
			mensajeAnadir.classList.remove("exito");
			mensajeAnadir.classList.add("error");
			return;
		}

		const nuevoJuego = {
			nombre,
			compania,
			plataforma,
			valoracion: `${Number(valoracion).toFixed(1).replace(".", ",")}/10`,
			precio: `${Number(precio).toFixed(2).replace(".", ",")} €`
		};

		videojuegos.push(nuevoJuego);
		pintarTabla();
		formularioVideojuegos.reset();
		localStorage.removeItem(formularioVideojuegos.id);
		mensajeAnadir.textContent = "Juego añadido correctamente.";
		mensajeAnadir.classList.remove("error");
		mensajeAnadir.classList.add("exito");
	});
}
