let contador = 0;

document.getElementById("boton").addEventListener("click", () => {
  contador++;
  document.getElementById("mensaje").textContent =
    "Has hecho clic " + contador + " veces";
});
