const sayHi = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hi", name);
      console.log("I'm the asyn part of asyncFunc");
      resolve(name);
    }, 1000);
  });
};

const talk = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla ...");
      resolve(name);
    });
  });
};

const sayBye = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios", name);
      //resolve();
      reject("Reject mesagge")
    }, 1000);
  });
};



console.log("Iniciando proceso...");

sayHi("Gabriela")
  .then(talk)
  .then(talk)
  .then(talk)
  .then(talk)
  .then(sayBye)
  .then(() => {
    console.log("Terminando proceso...");
  })
  .catch(error => {
    console.error(error)
  })
