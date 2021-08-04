// Importacion de la libreria de xmlhttprequest
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// ECMAscript 6
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    // Instanciacion
    const xhttp = new XMLHttpRequest();

    // validacion de conexion al server
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error", url_api));
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;
