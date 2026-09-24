let mensaje = "global";

function saludar() {
    let mensaje = "dentro de la funcion";
    console.log(mensaje);
}

saludar();
console.log(mensaje);

if (true) {
    let secreto = 42;
}

console.log(secreto);
