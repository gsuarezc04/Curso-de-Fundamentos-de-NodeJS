const sayHi = async (name) => {
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
      resolve();
      //reject("Reject mesagge")
    }, 1000);
  });
};



const main = async () => {
  const nombre = await sayHi("Gabi");
  await talk();
  await talk();
  await talk();
  await talk();
  await sayBye(nombre);
  console.log("Terminando proceso...");
};



console.log("Iniciando proceso...");

main();

console.log("Esta va a ser la segunda línea");
