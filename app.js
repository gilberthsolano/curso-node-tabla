
const {crearArchivo}=require('./helpers/multiplicar');
const argv= require('./config/yargs');

require('colors');



console.clear();



crearArchivo(argv.b, argv.l, argv.h)
.then((archivo) => console.log(`Archivo creado: ${archivo.rainbow}`))
.catch((err) => console.log(err));
