// Ejemplo de la sintaxis de una promesa
let myNewPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Éxito!!!");
  }, 3000);
});

// Invocación de la promesa
myNewPromise.then((successMessage) => {
  console.log(`Todo fue un verdadero ${successMessage}`);
});
