process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('Ale, el proceso se acabó');
  setTimeout(() => {
    console.log('Esto no se va a ver nunca');
  }, 0);
});

process.on("uncaughtException", (err, origen) => {
  console.error("Vaya se nos ha olvidado capturar un error");
  console.error(err);
});

// functionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');

setTimeout(() => {
  console.log('Esto no si se va a ver');
}, 0);