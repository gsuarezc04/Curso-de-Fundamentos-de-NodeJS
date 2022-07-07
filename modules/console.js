var users = [
  {
    name: "Gabriela",
    lastName: "Súarez",
  },
  {
    name: "Silvana",
    lastName: "Súarez",
  },
];

console.table(users);

const function1 = () => {
  console.group("function1");
  console.log("Esto es de la función 1");
  console.log("Esto También");
  console.log("Esto También");
  function2();
  console.log("Hemos vuelto a la función 1");
  console.groupEnd("function1");
};

const function2 = () => {
  console.group("function2");
  console.log("Ahora estamos en la función 2");
  console.groupEnd("function2");
};

function1();

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
