const { spawn } = require("child_process");

/* const {exec} = require('child_process');

exec('ls -la', (err, stdout, sterr) => {
  if(err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
}) */

const process = spawn("ls", ["-la"]);

console.log(process.pid);
console.log(process.connected);

process.stdout.on("data", (dato) => {
  console.log(dato.toString());
});

process.on("exit", () => {
  console.log("El proceso terminó");
});

//etc... that can be found in documentation
