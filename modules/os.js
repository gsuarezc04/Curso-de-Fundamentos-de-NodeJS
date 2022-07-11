const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
console.log("Memoria libre en bytes: ", os.freemem())
console.log("Cuanta memoria tengo en bytes: ", os.totalmem())
console.log(os.hostname());