const { option } = require("yargs");
const { crearArchivo } = require("./helper/multiplicar");
const colors = require("colors");
const argv = require("./Config/yargs");
console.clear();
//console.log(process.argv);
console.log(argv);
//console.log("Base de yargs:", argv.b);
crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "Creado"))
  .catch((err) => console.log(err));
/*

const { option } = require("yargs");
const { crearArchivo } = require("./helper/multiplicar");
const colors = require("colors");
const argv = require("./Config/yargs");
console.clear();
//console.log(process.argv);
console.log(argv);
//console.log("Base de yargs:", argv.b);
crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "Creado"))
  .catch((err) => console.log(err));


const { crearArchivo } = require("./helper/multiplicar");
const argv = require("yargs").option("b", {
  alias: "base",
  type: "number",
  demandOption: true
}).argv;
console.clear();
//console.log(process.argv);
console.log(argv);
console.log("Base de yargs:", argv.b);


const { crearArchivo } = require("./helper/multiplicar");
const argv = require("yargs").option("b", {
  alias: "base",
  type: "number",
}).argv;
console.clear();
console.log(process.argv);
console.log(argv);
console.log("Base de yargs:", argv.b);


const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs').argv;
console.clear();
console.log(process.argv);
console.log(argv);
console.log('j de yargs:', argv.j);


const {crearArchivo} = require('./helper/multiplicar')
const argv = require('yargs').argv;
console.clear();
console.log(process.argv);
console.log(argv);


const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
const[ , j ]= arg3.split('='); //separa el string por el caracter =
console.log(j);

crearArchivo(j)
  .then((nombreArchivo) => console.log(nombreArchivo, 'Creado'))
  .catch((err) => console.log(err));


const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
const[ , j ]= arg3.split('='); //separa el string por el caracter =
console.log(j);


const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
console.log(arg3);
const j = 6;


const { crearArchivo } = require("./helper/multiplicar");
console.clear();
const [, , arg3] = process.argv; // estamos tomando el tercer argumento.
console.log(arg3);
const j = 6;


const { crearArchivo } = require("./helper/multiplicar");
console.clear();
console.log(process.argv);
const j = 6;
crearArchivo(j)
  .then((nombreArchivo) => console.log(nombreArchivo, 'Creado'))
  .catch((err) => console.log(err));


// hacer la tabla del 5 en javascrip
const { crearArchivo } = require("./helper/multiplicar");
console.clear();
const j = 6;
crearArchivo(j)
  .then((nombreArchivo) => console.log(nombreArchivo, 'Creado'))
  .catch((err) => console.log(err)); */
