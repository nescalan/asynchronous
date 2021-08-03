// Referencia al objeto XMLHttpRequest()
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var XHTTP = new XMLHttpRequest();

// Permite verificar si la peticion ya se ejecuto
const DONE = 4;

// Para verificar el status que devuelve el servidor
const STATUS = 200;

// Ruta del api de pokemon
const API_POKEMON = "//pokeapi.co/";

// ======================================

const usandoCallBacks = (ruta, callback) => {
  // Iniciamos la peticion
  XHTTP.onreadystatechange = () => {
    // Validacion de la peticion sea DONE
    if (XHTTP.readyState === DONE) {
      // En caso de true validamos que el status sea 200
      if (XHTTP.status === STATUS) {
        callback(null, JSON.parse(XHTTP.responseText));
      } else {
        // En caso de presentarse un error
        const error = new Error(`Error al consultar la ruta ${API_POKEMON}`);
        return callback(error, null);
      }
    }
  };
  XHTTP.open("GET", ruta);
  XHTTP.send();
};

//=================== Consultando el api de pokemons :) ===================//

//se realiza la primera petcion a la api de pokemons
usandoCallBacks(`${API_POKEMON}/api/v1/pokemon/4/`, (error_1, data_1) => {
  //error
  if (error_1) return console.error(error_1);
  //se realiza la segunda peticion a la api de pokemons
  usandoCallBacks(
    `${API_POKEMON}${data_1.evolutions[0].resource_uri}`,
    (error_2, data_2) => {
      //error
      if (error_2) return console.error(error_2);
      //se realiza la tercera peticion a la api de pokemons
      usandoCallBacks(
        `${API_POKEMON}${data_2.evolutions[0].resource_uri}`,
        (error_3, data_3) => {
          //error
          if (error_3) return console.error(error_3);
          //se realiza la cuarta peticion a la api de pokemons
          usandoCallBacks(
            `${API_POKEMON}${data_3.evolutions[0].resource_uri}`,
            (error_4, data_4) => {
              //error
              if (error_4) return console.error(error_4);
              //Primera fase del pokemon
              console.log(`Pokemon => ${data_1.name}`);
              //Primera evolucion
              console.log(`\tPrimera evolución => ${data_2.name}`);
              //Segunda Evolucion
              console.log(`\t\tSegunda evolución => ${data_3.name}`);
              //Ultima evolucion
              console.log(`\t\t\tUltima evolución => ${data_4.name}`);
            }
          ); //cuarta llamada
        }
      ); //tercera llamada
    }
  ); //Segunda llamada
}); //Primera llamada
