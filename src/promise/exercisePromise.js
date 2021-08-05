// Importacion de la libreria de xmlhttprequest
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Creacion de la Promesa
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Instanciacion de XMLHttpRequest
    const xhttp = XMLHttpRequest();

    // Validacion de Conexion al Servidor
    xhttp.open("GET", url_api, true);
    xhttp.onredystatechange = () => {};

    if (true) {
      resolve("");
    } else {
      reject();
    }
  });
};
