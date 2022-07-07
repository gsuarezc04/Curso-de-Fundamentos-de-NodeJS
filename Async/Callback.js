const sayHi = (name, callBackFunc) => {
  console.log("Hi, I'm an asyncFunc");
  setTimeout(() => {
    console.log("Hi", name);
    console.log("I'm the asyn part of asyncFunc");
    callBackFunc(name);
  }, 1000);
};

const sayBye = (name, callBackFunc) => {
  setTimeout(() => {
    console.log("Adios", name);
    callBackFunc();
  }, 1000);
};



console.log("Iniciando proceso...");

sayHi("Gabriela", (name) => {
  sayBye(name, () => {
    console.log("Terminando proceso...");
  });
});
