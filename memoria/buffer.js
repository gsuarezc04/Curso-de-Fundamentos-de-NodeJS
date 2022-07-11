let buffer = Buffer.alloc(1);
console.log(buffer);

let buffer2 = Buffer.alloc(4);
console.log(buffer2);

let buffer3 = Buffer.from([1, 2, 3]);
console.log(buffer3);

let buffer4 = Buffer.from("Hola");
console.log(buffer4);
console.log(buffer4.toString());

let abc = Buffer.alloc(26);
console.log(abc);
for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}
console.log(abc);
console.log(abc.toString());
