const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

// Invocacion de fetchData con API por parametros
fetchData(API)
  .then((data) => {
    console.log(`Cantidad de Personajes: ${data.info.count}`);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(`El nombre del personaje No. ${data.id} es: ${data.name}`);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    console.log(`Pertenece a la ${data.dimension}`);
  })
  .catch((err) => console.log(err));
