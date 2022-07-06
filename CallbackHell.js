const sayHi = (name, callBackFunc) => {
  console.log("Hi, I'm an asyncFunc");
  setTimeout(() => {
    console.log("Hi", name);
    console.log("I'm the asyn part of asyncFunc");
    callBackFunc(name);
  }, 1000);
};

const talk = (callBackFunc) => {
  setTimeout(() => {
    console.log("bla bla bla ...");
    callBackFunc();
  });
};

const sayBye = (name, callBackFunc) => {
  setTimeout(() => {
    console.log("Adios", name);
    callBackFunc();
  }, 1000);
};

const conversation = (name, times, callBackFunc) => {
  if(times > 0) {
    talk(() => {
      conversation(name, --times, callBackFunc)
    })
  } else {
    sayBye(name, callBackFunc)
  }
}



console.log("Iniciando proceso...");

sayHi('Gabriela', (name) => {
  conversation(name, 4, () => {
    console.log("Terminando proceso...")
  })
})

/*
CallbackHell:

sayHi("Gabriela", (name) => {
  talk(() => {
    talk(() => {
      talk(() => {
        sayBye(name, () => {
          console.log("Terminando proceso...");
        });
      });
    });
  });
});
*/
