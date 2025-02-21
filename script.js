// Referencias a los elementos
const colVerde = document.getElementById("colVerde");
const colRojo = document.getElementById("colRojo");

const sliderVerde = document.getElementById("sliderVerde");
const sliderRojo = document.getElementById("sliderRojo");

const hexVerde = document.getElementById("hexVerde");
const hexRojo = document.getElementById("hexRojo");

// Función para convertir un valor 0-255 en dos dígitos hex
function toHex(value) {
  let hex = Number(value).toString(16);
  return hex.length < 2 ? "0" + hex : hex;
}

// Evento para el slider del verde
sliderVerde.addEventListener("input", () => {
  // Tomamos el valor (0-255) y lo convertimos en hex
  let greenVal = toHex(sliderVerde.value);

  // Armamos el color: verde => #00GG00
  let color = `#00${greenVal}00`;

  // Aplicamos el color de fondo a la columna verde
  colVerde.style.backgroundColor = color;

  // Actualizamos el texto del hex
  hexVerde.textContent = color.toUpperCase();
});

// Evento para el slider del rojo
sliderRojo.addEventListener("input", () => {
  // Tomamos el valor (0-255) y lo convertimos en hex
  let redVal = toHex(sliderRojo.value);

  // Armamos el color: rojo => #RR0000
  let color = `#${redVal}0000`;

  // Aplicamos el color de fondo a la columna roja
  colRojo.style.backgroundColor = color;

  // Actualizamos el texto del hex
  hexRojo.textContent = color.toUpperCase();
});

// Valores iniciales (opcional, para que coincidan con lo que se muestra al cargar)
sliderVerde.value = 128;
colVerde.style.backgroundColor = "#008000";
hexVerde.textContent = "#008000";

sliderRojo.value = 128;
colRojo.style.backgroundColor = "#800000";
hexRojo.textContent = "#800000";
