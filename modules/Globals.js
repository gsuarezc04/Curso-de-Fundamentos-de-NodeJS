console.log("global:");
console.log(global, "\n");
//Never print global in a production project

console.log("setInterval:");
console.log(setInterval, "\n");

console.log("setInterval():");
let i = 0;
let interval = setInterval(() => {
  console.log("Hola");
  if(i === 3) {
    clearInterval(interval)
  }
  i++;
}, 1000);

console.log("setImmediate():");
setImmediate(() => {
    console.log('Hola de setImmediate')
});

//etc... that can be found in documentation
