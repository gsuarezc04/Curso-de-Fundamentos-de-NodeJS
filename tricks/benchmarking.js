console.time("todo");



let suma = 0;
console.time("bucle");
for (i = 0; i < 1000000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");


const asyncFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Termina el proceso asíncrono');
      resolve();
    }, 1000);
  })
}

console.time('async func');
asyncFunc()
  .then(() => {
    console.timeEnd('async func')
  })


  
console.timeEnd("todo");