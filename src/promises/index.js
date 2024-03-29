// Creacion de la Promesa
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    true
      ? resolve("Hey, resuelto correctamente")
      : reject("Oops, ni modo - no se pudo");
  });
};
//Invocacion de la Promesa
somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// Segunda Promesa
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Verdadeo");
      }, 2000);
    } else {
      const error = new Error("Oops, ni modo - no se pudo");
      reject(error);
    }
  });
};

//Invocacion de la Promesa
somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// Promesas encadenadas

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Todo tuanis en la llamada encadenada");
  })
  .catch((err) => console.error(err));
