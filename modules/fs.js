const fs = require("fs");

const read = (path, cb) => {
  fs.readFile(path, (err, data) => {
    console.log(data.toString());
  });
};

const write = (path, content, cb) => {
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error('No he podido escribirlo', err);
    } else {
      console.log('Se ha escrito correctamente');
    }
  })
}

const remove = (path, cb) => {
  fs.unlink(path, cb)
}

read(__dirname + '/archivo.txt');
//write(__dirname + '/archivo1.txt', "Soy un archivo nuevo");
//remove(__dirname + '/archivo1.txt', console.log);

//Hay muchas funciones, para sacar estadisticas de archivos,
//para cambiarles el nombre, etc... en la documentacion
